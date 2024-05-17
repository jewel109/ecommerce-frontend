"use client"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

interface LoginFormschema {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const formSchema = z.object({
  email: z.string().email().min(4),
  password: z.string().min(4)
})

const LoginForms: React.FC<LoginFormschema> = ({ onSubmit }) => {

  const [error, setError] = useState<string | null>(null);
  const { setTheme } = useTheme()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {

    // Implement form validation here (optional)
    // Replace with your actual registration logic (e.g., API call)
  };

  useEffect(() => {
    setTheme("dark")
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 ">
      <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
      <div className="flex flex-col space-y-4 lg:mx-auto">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem
                >

                  <FormLabel className="text-left lg:ml-72">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-full lg:w-2/4 self-center lg:mx-auto"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-left lg:ml-72 " />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem
                >

                  <FormLabel className="text-left lg:ml-72 ">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="md:w-full lg:w-2/4 self-center lg:mx-auto"
                    />

                  </FormControl>

                  <FormMessage className="text-left lg:ml-72 " />
                </FormItem>)
              } />



            <Button type="submit" className="md:w-full max-md:w-full lg:w-2/4 lg:ml-[314px] py-2 mt-3">Login</Button>
            <div className='mx-auto p-2 lg:w-2/4 sm:w-full max-md:w-full  flex flex-row justify-between'>
              <Link href='/' className='hover:text-green-500'>go Home </Link>
              <Link href='/login' className='hover:text-green-500'>Don't have Account? Sign in</Link>

            </div>

          </form>

        </Form >
      </div>
    </div >
  );
};

export default LoginForms;
