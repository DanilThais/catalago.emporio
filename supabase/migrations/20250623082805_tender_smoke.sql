/*
  # Dados iniciais de produtos

  1. Produtos de exemplo
    - Adiciona produtos das categorias Lattafa, Maison Alhambra e Diversos
    - Preços em reais
    - Categorias organizadas
*/

-- Inserir produtos de exemplo
INSERT INTO products (name, code, price, category, description) VALUES
  -- Lattafa
  ('Lattafa Raghba', 'LAT001', 89.90, 'Lattafa', 'Fragrância oriental amadeirada com notas de baunilha e âmbar'),
  ('Lattafa Opulent Oud', 'LAT002', 129.90, 'Lattafa', 'Perfume luxuoso com oud puro e especiarias orientais'),
  ('Lattafa Velvet Oud', 'LAT003', 109.90, 'Lattafa', 'Combinação suave de oud com notas florais delicadas'),
  ('Lattafa Badee Al Oud', 'LAT004', 119.90, 'Lattafa', 'Fragrância intensa com oud e rosa búlgara'),
  ('Lattafa Yara', 'LAT005', 99.90, 'Lattafa', 'Perfume doce e envolvente com notas gourmand'),
  
  -- Maison Alhambra
  ('Maison Alhambra Jean Lowe', 'MAL001', 149.90, 'Maison Alhambra', 'Inspirado em fragrâncias clássicas francesas'),
  ('Maison Alhambra Hayaati', 'MAL002', 139.90, 'Maison Alhambra', 'Fragrância floral oriental feminina'),
  ('Maison Alhambra Vintage', 'MAL003', 159.90, 'Maison Alhambra', 'Perfume vintage com notas amadeiradas'),
  ('Maison Alhambra Noir', 'MAL004', 169.90, 'Maison Alhambra', 'Fragrância masculina intensa e marcante'),
  ('Maison Alhambra Rose', 'MAL005', 144.90, 'Maison Alhambra', 'Delicada fragrância de rosas premium'),
  
  -- Diversos
  ('Óleo Perfumado Almíscar', 'DIV001', 29.90, 'Diversos', 'Óleo concentrado de almíscar natural'),
  ('Incenso Árabe Premium', 'DIV002', 19.90, 'Diversos', 'Incenso tradicional árabe de alta qualidade'),
  ('Água de Rosas Natural', 'DIV003', 24.90, 'Diversos', 'Água de rosas pura para cuidados com a pele'),
  ('Kit Presente Luxo', 'DIV004', 199.90, 'Diversos', 'Kit com 3 perfumes e acessórios em embalagem premium'),
  ('Difusor de Ambiente', 'DIV005', 39.90, 'Diversos', 'Difusor elétrico para óleos essenciais');