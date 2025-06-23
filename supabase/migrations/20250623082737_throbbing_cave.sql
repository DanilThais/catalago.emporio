/*
  # Schema inicial para sistema de pedidos

  1. Novas Tabelas
    - `products` - Produtos disponíveis para venda
      - `id` (uuid, primary key)
      - `name` (text) - Nome do produto
      - `code` (text, nullable) - Código do produto para uso futuro
      - `price` (numeric) - Preço unitário
      - `category` (text) - Categoria do produto
      - `description` (text, nullable) - Descrição do produto
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `saleswomen` - Perfis das vendedoras
      - `id` (uuid, primary key)
      - `user_id` (uuid) - Referência ao usuário do Supabase Auth
      - `name` (text) - Nome da vendedora
      - `email` (text) - Email da vendedora
      - `phone` (text, nullable) - Telefone da vendedora
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `orders` - Pedidos realizados
      - `id` (uuid, primary key)
      - `saleswoman_id` (uuid) - Referência à vendedora
      - `order_date` (timestamptz) - Data do pedido
      - `status` (enum) - Status do pedido (pending, confirmed, delivered, cancelled)
      - `total_amount` (numeric) - Valor total do pedido
      - `customer_name` (text, nullable) - Nome do cliente
      - `customer_phone` (text, nullable) - Telefone do cliente
      - `notes` (text, nullable) - Observações do pedido
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `order_items` - Itens dos pedidos
      - `id` (uuid, primary key)
      - `order_id` (uuid) - Referência ao pedido
      - `product_id` (uuid) - Referência ao produto
      - `quantity` (integer) - Quantidade do produto
      - `unit_price` (numeric) - Preço unitário no momento do pedido
      - `total_price` (numeric) - Preço total do item (quantity * unit_price)
      - `created_at` (timestamptz)

  2. Segurança
    - Habilitar RLS em todas as tabelas
    - Políticas para vendedoras acessarem apenas seus próprios dados
    - Políticas para administradores gerenciarem produtos
*/

-- Criar enum para status dos pedidos
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'delivered', 'cancelled');

-- Tabela de produtos
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text,
  price numeric(10,2) NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela de vendedoras
CREATE TABLE IF NOT EXISTS saleswomen (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela de pedidos
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  saleswoman_id uuid REFERENCES saleswomen(id) ON DELETE CASCADE NOT NULL,
  order_date timestamptz DEFAULT now(),
  status order_status DEFAULT 'pending',
  total_amount numeric(10,2) NOT NULL CHECK (total_amount >= 0),
  customer_name text,
  customer_phone text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela de itens dos pedidos
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE RESTRICT NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price numeric(10,2) NOT NULL CHECK (unit_price >= 0),
  total_price numeric(10,2) NOT NULL CHECK (total_price >= 0),
  created_at timestamptz DEFAULT now()
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_saleswomen_user_id ON saleswomen(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_saleswoman_id ON orders(saleswoman_id);
CREATE INDEX IF NOT EXISTS idx_orders_date ON orders(order_date);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- Habilitar RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE saleswomen ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Políticas para produtos (todos podem ler, apenas admins podem modificar)
CREATE POLICY "Todos podem visualizar produtos"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

-- Políticas para vendedoras (apenas próprio perfil)
CREATE POLICY "Vendedoras podem ver próprio perfil"
  ON saleswomen
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Vendedoras podem atualizar próprio perfil"
  ON saleswomen
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem criar perfil de vendedora"
  ON saleswomen
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Políticas para pedidos (apenas próprios pedidos)
CREATE POLICY "Vendedoras podem ver próprios pedidos"
  ON orders
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM saleswomen 
      WHERE saleswomen.id = orders.saleswoman_id 
      AND saleswomen.user_id = auth.uid()
    )
  );

CREATE POLICY "Vendedoras podem criar pedidos"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM saleswomen 
      WHERE saleswomen.id = orders.saleswoman_id 
      AND saleswomen.user_id = auth.uid()
    )
  );

CREATE POLICY "Vendedoras podem atualizar próprios pedidos"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM saleswomen 
      WHERE saleswomen.id = orders.saleswoman_id 
      AND saleswomen.user_id = auth.uid()
    )
  );

-- Políticas para itens dos pedidos
CREATE POLICY "Vendedoras podem ver itens de próprios pedidos"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders 
      JOIN saleswomen ON orders.saleswoman_id = saleswomen.id
      WHERE orders.id = order_items.order_id 
      AND saleswomen.user_id = auth.uid()
    )
  );

CREATE POLICY "Vendedoras podem criar itens em próprios pedidos"
  ON order_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders 
      JOIN saleswomen ON orders.saleswoman_id = saleswomen.id
      WHERE orders.id = order_items.order_id 
      AND saleswomen.user_id = auth.uid()
    )
  );

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
CREATE TRIGGER update_products_updated_at 
  BEFORE UPDATE ON products 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_saleswomen_updated_at 
  BEFORE UPDATE ON saleswomen 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at 
  BEFORE UPDATE ON orders 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();