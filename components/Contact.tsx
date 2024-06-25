import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Mail, Phone } from 'lucide-react';

const FormSchema = z.object({
  name: z.string().min(2, 'Name is required and must be at least 2 characters long'),
  mail: z.string().email('Invalid email address'),
  msg: z.string().min(10, 'Message must be at least 10 characters long'),
  contact: z.string().optional(), // Change to string to handle optional input
});

function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange', // Validate on change
    defaultValues: {
      name: '',
      mail: '',
      contact: '',
      msg: '',
    },
  });

  const { toast } = useToast();

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await fetch('https://formspree.io/f/mnqekqdo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);

      form.reset();
      toast({
        title: 'Form Submitted',
        description: 'Your message was sent!',
      })

    } catch (error) {
      console.error('Error:', error);
      // Optionally, display an error message or handle the error
    }
  };

  return (
    <div id="Contact" className="min-h-screen">
      <h1 className="sm:pt-20 pt-4 text-2xl font-bold text-center">FEEDBACK</h1>
      <div className="lg:w-1/2 w-5/6 rounded-2xl mx-auto bg-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-4/5 sm:space-y-6 space-y-3 flex flex-col mx-auto py-4 sm:py-8 mt-14 justify-center"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact No. (optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Contact No. (optional)" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage>{form.formState.errors.contact?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="msg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      {...field}
                      className="h-36"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage>{form.formState.errors.msg?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Button
              className="bg-black rounded-xl mx-auto hover:bg-black text-white"
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
      <footer className="bg-slate-950 mt-8 pb-7 flex flex-col items-center">
        <div className='flex flex-col items-center'>
          <h1 className="text-white text-lg font-bold p-2">Get in Touch</h1>
          <ul className="text-white flex space-x-12 ml-4 p-2 cursor-pointer">
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="mailto:manishlives15@gmail.com">
                      <Mail />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black">
                    <p>manishlives15@gmail.com</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>

            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="tel:+918050375405">
                      <Phone />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className='bg-black'>
                    <p>+918050375405</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </ul>
        </div>
        <div className="text-white mt-2">© Copyright 2024 . Mobile Friendly Designed And Developed by Maneesh</div>
      </footer>
    </div>
  );
}

export default Contact;
