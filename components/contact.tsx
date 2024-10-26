'use client';

import React from 'react';

import { sendEmail } from '@/actions/sendEmail';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { LuLoader2 } from 'react-icons/lu';
import { z } from 'zod';

import { contactData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { slideIn } from '@/lib/utils';

import EarthCanvas from './canvas/earth';
import SectionHeading from './section-heading';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.'
  })
});

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const { toast } = useToast();

  const form = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (formData: any) => {
    try {
      const { error } = await sendEmail(formData);

      if (error) {
        toast({
          variant: 'destructive',
          title: error
        });
        return;
      }
      toast({
        variant: 'default',
        title: 'Email sent successfully!'
      });
      form.reset({
        email: '',
        message: ''
      });
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'An error occurred'
      });
    }
  };

  return (
    <div className={`flex xl:flex-row flex-col gap-4 overflow-hidden justify-between  pt-12 `}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className=' xl:h-auto md:h-[550px] h-[350px] w-full xl:w-[50%] relative overflow-hidden'
      >
        <EarthCanvas />
      </motion.div>
      <motion.section
        id='contact'
        ref={ref}
        className='mb-20 sm:mb-28 p-4 text-center'
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
        viewport={{
          once: true
        }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className='text-gray-700 -mt-6 dark:text-white/80'>
          Please contact me directly at{' '}
          <a
            className='liner-background'
            href={`mailto:${contactData.email}`}
            target={'_blank'}
            rel='noreferrer'
          >
            {contactData.email}
          </a>{' '}
          or through this form.
        </p>
        <div className='mt-10 flex flex-col dark:text-black self-end sm:self-center'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className='h-14 px-4 rounded-lg  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                        placeholder='email'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className='h-52 resize-none my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                        placeholder='Your message'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className='custom-gradiant'
                disabled={form?.formState?.isSubmitting}
                type='submit'
              >
                {form?.formState?.isSubmitting ? (
                  <>
                    <LuLoader2 className='mr-2 h-4 w-4 animate-spin' />
                    Please wait
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.section>
    </div>
  );
}
