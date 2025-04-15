-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create admin role
CREATE ROLE admin;

-- Create policies for admin access
CREATE POLICY "Admin users can do anything" ON public.profiles
  FOR ALL
  TO admin
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'admin@dianaluvanda.com'
  ));

-- Insert admin user (run this in Supabase SQL editor)
INSERT INTO auth.users (
  email,
  encrypted_password,
  email_confirmed_at,
  role
) VALUES (
  'admin@dianaluvanda.com',
  crypt('diana2024', gen_salt('bf')),
  now(),
  'admin'
);

-- Create profiles table if not exists
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  updated_at TIMESTAMP WITH TIME ZONE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  CONSTRAINT profiles_pkey PRIMARY KEY (id)
);

-- Create a trigger to create a profile entry when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    CASE 
      WHEN NEW.email = 'admin@dianaluvanda.com' THEN 'admin'
      ELSE 'user'
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function every time a user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

