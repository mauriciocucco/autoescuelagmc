import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section
      id='testimonios'
      className='w-full py-12 md:py-24 lg:py-14 bg-gray-50'
    >
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Lo que dicen nuestros alumnos
            </h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Testimonios de personas que aprendieron a conducir con nosotros
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12'>
          <Card className='rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between'>
            <CardContent className='p-6 flex flex-col justify-between h-full'>
              <div>
                <div className='flex items-center space-x-1 mb-2'>
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                </div>
                <p className='text-sm text-gray-500 mb-4'>
                  "Muy buena experiencia. En mi caso fue para manejo de moto. Recomendable Autoescuela GMC!"
                </p>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
                  <span className='text-sm font-medium'>FA</span>
                </div>
                <div>
                  <p className='text-sm font-medium'>Sonia Cordoba</p>
                  <p className='text-xs text-gray-500'>Alumna - 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between'>
            <CardContent className='p-6 flex flex-col justify-between h-full'>
              <div>
                <div className='flex items-center space-x-1 mb-2'>
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                </div>
                <p className='text-sm text-gray-500 mb-4'>
                  "Excelente experiencia. Guido transmite la importancia de
                  conducir con responsabilidad y conciencia, cuidando tanto la
                  propia vida como la de los demás. Mucha paciencia, compromiso
                  y profesionalismo. Muy recomendable."
                </p>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
                  <span className='text-sm font-medium'>JME</span>
                </div>
                <div>
                  <p className='text-sm font-medium'>Romina Zelaya</p>
                  <p className='text-xs text-gray-500'>Alumna - 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between'>
            <CardContent className='p-6 flex flex-col justify-between h-full'>
              <div>
                <div className='flex items-center space-x-1 mb-2'>
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                  <Star className='h-5 w-5 fill-primary text-primary' />
                </div>
                <p className='text-sm text-gray-500 mb-4'>
                  "Gran instructor de manejo Guido y su equipo! El
                  acompañamiento es de 10, profesional, paciente, empático,
                  respetuoso del ritmo de cada persona que se propone el
                  objetivo de aprender a manejar y sacar su licencia. Te dan
                  consejos personalizados para ganar confianza y superar las
                  inseguridades al volante. Se nota el compromiso y las ganas
                  que le ponen para acompañarte en todo el proceso, entendiendo
                  que el aprendizaje de cada quien es diferente y ajustando las
                  estrategias de instrucción a las necesidades de cada caso en
                  particular. Lo recomiendo totalmente!"
                </p>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
                  <span className='text-sm font-medium'>AC</span>
                </div>
                <div>
                  <p className='text-sm font-medium'>Sabrina Zarza</p>
                  <p className='text-xs text-gray-500'>Alumna - 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
