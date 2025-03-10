
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowLeft, CheckCircle, RefreshCw } from "lucide-react";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResending, setIsResending] = useState(false);

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
        setIsSuccess(true);
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

  const handleResend = () => {
    setIsSuccess(false);
    form.reset();
  };

  const handleResendCode = () => {
    const email = form.getValues().email;
    setIsResending(true);
    
    // Here you would call your API to resend the verification code
    console.log("Resending verification code to:", email);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Código reenviado!",
        description: "Um novo código foi enviado para o seu email.",
      });
      setIsResending(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <Link to="/cadastro" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Voltar para cadastro</span>
            </Link>

            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#E5DEFF] rounded-full mb-4">
                <Mail className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Recuperar Acesso</h2>
              <p className="text-gray-600 mt-2">
                Digite seu email para receber um novo link de confirmação.
              </p>
            </div>

            {!isSuccess ? (
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

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar link de confirmação"}
                  </Button>
                </form>
              </Form>
            ) : (
              <div className="space-y-6">
                <div className="bg-[#F7F5FF] p-6 rounded-lg border border-[#E5DEFF] text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email enviado!</h3>
                  <p className="text-gray-600 mb-2">
                    Enviamos um novo link de confirmação para o email:
                  </p>
                  <p className="font-medium text-gray-800 break-all">
                    {form.getValues().email}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-[#E5DEFF]">
                    <p className="text-sm text-gray-600 mb-2">Não recebeu um código?</p>
                    <Button 
                      onClick={handleResendCode} 
                      variant="outline" 
                      className="bg-white text-primary border-primary hover:bg-primary/5"
                      disabled={isResending}
                      size="sm"
                    >
                      <RefreshCw className={`h-4 w-4 mr-2 ${isResending ? 'animate-spin' : ''}`} />
                      {isResending ? "Reenviando..." : "Reenviar código"}
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button 
                    onClick={handleResend} 
                    variant="outline" 
                    className="w-full"
                  >
                    Reenviar para outro email
                  </Button>
                </div>
              </div>
            )}
            
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
    </div>
  );
};

export default AccountRecovery;
