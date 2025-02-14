import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Logo } from "@/components/Logo";
import { Lock, Mail, ArrowRight, User, Shield, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

const UserRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      console.log(values);
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Redirecionando para a página de login...",
      });
      navigate("/login");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao fazer cadastro",
        description: "Verifique seus dados e tente novamente",
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
              Crie sua conta gratuita
            </h1>
            <p className="text-lg text-gray-600">
              Junte-se à nossa comunidade e descubra os melhores eventos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-primary/10 group"
              >
                <div className="bg-[#9b87f5]/10 p-3 rounded-xl w-fit mb-3 group-hover:bg-[#9b87f5]/20 transition-colors">
                  <Users className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Viva Experiências Únicas</h3>
                <p className="text-sm text-gray-600">Conecte-se com momentos inesquecíveis e faça parte de histórias extraordinárias</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-primary/10 group"
              >
                <div className="bg-[#9b87f5]/10 p-3 rounded-xl w-fit mb-3 group-hover:bg-[#9b87f5]/20 transition-colors">
                  <Shield className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Compra Segura</h3>
                <p className="text-sm text-gray-600">Transações protegidas e garantia de reembolso em todos os eventos</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-primary/10 group col-span-full"
              >
                <div className="bg-[#9b87f5]/10 p-3 rounded-xl w-fit mb-3 group-hover:bg-[#9b87f5]/20 transition-colors">
                  <ArrowRight className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Tudo em Um Só Lugar</h3>
                <p className="text-sm text-gray-600">Descubra, escolha e compre ingressos para os melhores eventos na palma da sua mão</p>
              </motion.div>
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
              Criar Conta
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-muted" />
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
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

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Senha</FormLabel>
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
                  {isLoading ? "Criando conta..." : "Criar Conta"}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{" "}
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
    </div>
  );
};

export default UserRegister;
