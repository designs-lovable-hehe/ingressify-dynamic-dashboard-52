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
import { Separator } from "@/components/ui/separator";

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

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    setIsLoading(true);
    try {
      console.log(`Login com ${provider}`);
      toast({
        title: "Login social iniciado",
        description: `Autenticando com ${provider}...`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao fazer login social",
        description: "Não foi possível conectar com o provedor selecionado",
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

            <div className="space-y-4 mb-6">
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 hover:bg-slate-50"
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar com Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 hover:bg-slate-50"
                onClick={() => handleSocialLogin('facebook')}
                disabled={isLoading}
              >
                <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                Continuar com Facebook
              </Button>
            </div>

            <div className="relative mb-6">
              <Separator className="my-4" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                ou
              </span>
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
