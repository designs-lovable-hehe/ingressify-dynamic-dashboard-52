
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Digite um email válido"),
});

const AccountRecovery = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Here you would call your API to request a new confirmation email
      console.log("Requesting new confirmation email for:", values.email);
      
      // Simulate API call success
      setTimeout(() => {
        toast({
          title: "Email enviado com sucesso!",
          description: "Verifique sua caixa de entrada para instruções.",
        });
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar email",
        description: "Tente novamente mais tarde.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white p-8 rounded-3xl shadow-md">
          <Link to="/cadastro" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Voltar para cadastro</span>
          </Link>

          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#F3EFFF] rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Recuperar Acesso</h2>
            <p className="text-gray-600 mt-2">
              Digite seu email para receber um novo link de confirmação.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                        <Input
                          placeholder="seu@email.com"
                          className="pl-10"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar link de confirmação"}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Já tem acesso à sua conta?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Faça login aqui
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountRecovery;
