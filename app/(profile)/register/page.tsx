"use client"
import { Button } from '@/components/ui/button';
import { FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface RegisterFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { setTheme } = useTheme()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Implement form validation here (optional)
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Replace with your actual registration logic (e.g., API call)
    onSubmit({ email, password });
    console.log('Form submitted:', { email, password }); // Replace with actual logic
  };

  useEffect(() => {
    setTheme("dark")
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
      <FormItem onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <Label htmlFor="email" className="text-left lg:ml-72">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="md:w-full lg:w-2/4 self-center"
        />
        <Label htmlFor="password" className="text-left lg:ml-72">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="md:w-full lg:w-2/4 self-center"
        />
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <Button type="submit" className="md:w-full max-md:w-full lg:w-2/4 self-center mx-auto">Register</Button>
      </FormItem>
      <div className='mx-auto p-2 lg:w-2/4 sm:w-full max-md:w-full  flex flex-row justify-between'>
        <Link href='/' className='hover:text-green-500'>go Home </Link>
        <Link href='/login' className='hover:text-green-500'>Already have Account? Login</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
