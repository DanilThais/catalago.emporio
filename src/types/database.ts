export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          code: string | null;
          price: number;
          category: string;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          code?: string | null;
          price: number;
          category: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          code?: string | null;
          price?: number;
          category?: string;
          description?: string | null;
          updated_at?: string;
        };
      };
      saleswomen: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          email: string;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          email: string;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          saleswoman_id: string;
          order_date: string;
          status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
          total_amount: number;
          customer_name: string | null;
          customer_phone: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          saleswoman_id: string;
          order_date?: string;
          status?: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
          total_amount: number;
          customer_name?: string | null;
          customer_phone?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          saleswoman_id?: string;
          order_date?: string;
          status?: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
          total_amount?: number;
          customer_name?: string | null;
          customer_phone?: string | null;
          notes?: string | null;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
        };
      };
    };
  };
}