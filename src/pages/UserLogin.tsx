
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Logo } from "@/components/Logo";
import { Lock, Mail, ArrowRight, Ticket, Shield, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

const UserLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Here we'll add Supabase auth later
      console.log(values);
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para a página inicial...",
      });
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900">
              Acesse os melhores eventos
            </h1>
            <p className="text-lg text-gray-600">
              Entre na sua conta para comprar ingressos e gerenciar suas reservas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <Ticket className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">Ingressos Garantidos</h3>
                <p className="text-sm text-gray-600">Compre com segurança e praticidade</p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">Pagamento Seguro</h3>
                <p className="text-sm text-gray-600">Suas transações estão protegidas</p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <Users className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">Eventos Exclusivos</h3>
                <p className="text-sm text-gray-600">Acesso VIP a pré-vendas</p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <ArrowRight className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold">Acesso Rápido</h3>
                <p className="text-sm text-gray-600">Entre nos eventos sem filas</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Bem-vindo de volta!
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted" />
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

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted" />
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="******"
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
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <Link
                  to="/cadastro"
                  className="font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Criar conta
                </Link>
              </p>
              <Link
                to="/esqueci-senha"
                className="block text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserLogin;

