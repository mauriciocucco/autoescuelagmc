"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";

const questions = [
{
  id: 1,
  question: "¿Qué documentación debe tener el conductor?",
  options: [
    { id: "a", text: "Licencia de conducir" },
    { id: "b", text: "Cédula verde" },
    { id: "c", text: "Recibo de patente" },
    { id: "d", text: "Seguro vigente" },
    { id: "e", text: "VTV (Verificación Técnica Vehicular)" },
    { id: "f", text: "Todas" } 
  ],
  correctAnswer: "f"
},
{
  id: 2,
  question: "¿Cuál es la mano de circulación reglamentaria?",
  options: [
    { id: "a", text: "La mano izquierda" },   
    { id: "b", text: "La mano derecha" },     
    { id: "c", text: "Ambas manos" },         
    { id: "d", text: "La mano central" }      
  ],
  correctAnswer: "b"
},
{
  id: 3,
  question: "¿Por dónde se adelanta a otro vehículo?",
  options: [
    { id: "a", text: "Por la mano derecha" },   
    { id: "b", text: "Por la mano izquierda" }, 
    { id: "c", text: "Por la banquina" },       
    { id: "d", text: "Por el carril central" } 
  ],
  correctAnswer: "b"
},
{
  id: 4,
  question: "¿Qué elementos de seguridad deben llevar los vehículos que circulan?",
  options: [
    { id: "a", text: "Freno de mano, espejo retrovisor, balizas" },
    { id: "b", text: "Paragolpes, cinturón de seguridad, matafuegos" },
    { id: "c", text: "Herramientas de auxilio, balizas, cinturón de seguridad" },
    { id: "d", text: "Todas las anteriores" } 
  ],
  correctAnswer: "d"
},
{
  id: 5,
  question: "Si en una esquina se encuentran dos vehículos, ¿quién tiene la prioridad de paso?",
  options: [
    { id: "a", text: "El que viene por la izquierda" },   
    { id: "b", text: "El que viene por la derecha" },     
    { id: "c", text: "El que llega primero" },            
    { id: "d", text: "El vehículo más grande" }          
  ],
  correctAnswer: "b"
},
{
  id: 6,
  question: "¿Qué distancia deben mantener los vehículos en marcha respecto al que está adelante?",
  options: [
    { id: "a", text: "5 metros sin importar la velocidad" },            
    { id: "b", text: "A 10 metros por cada 10 km/h" }, 
     { id: "c", text: "A 1 metro por km/h de velocidad" },           
    { id: "d", text: "Lo más cerca posible para ganar tiempo" }  
  ],
  correctAnswer: "c",
  
},
{
  id: 7,
  question: "En las esquinas o en zona con senda peatonal, ¿quién tiene el derecho de paso?",
  options: [
    { id: "a", text: "El peatón siempre" },           
    { id: "b", text: "El vehículo más rápido" },      
    { id: "c", text: "El que toca bocina primero" },  
    { id: "d", text: "El que viene por la derecha" }  
  ],
  correctAnswer: "a",
  
},
{
  id: 8,
  question: "En una rotonda, ¿quién tiene prioridad de paso?",
  options: [ 
    { id: "a", text: "El que quiere ingresar" },            
    { id: "b", text: "El que viene por la izquierda" },        
    { id: "c", text: "El vehículo más grande" },
    { id: "d", text: "El que está circulando y el que sale" }                
  ],
  correctAnswer: "d"
}
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: answerId,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Resultados del Quiz</CardTitle>
            <CardDescription>
              Has completado el quiz de conocimientos de conducción
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <div className="text-5xl font-bold mb-4">
                {score}/{questions.length}
              </div>
              <div className="text-xl mb-6">
                {percentage >= 70 ? (
                  <span className="text-green-600">
                    ¡Felicidades! Has aprobado el quiz.
                  </span>
                ) : (
                  <span className="text-red-600">
                    Necesitas repasar un poco más.
                  </span>
                )}
              </div>

              <div className="space-y-4 mt-8 text-left">
                <h3 className="text-lg font-medium">Revisión de respuestas:</h3>
                {questions.map((question) => (
                  <div key={question.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      {selectedAnswers[question.id] ===
                      question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 flex-none text-green-600 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 flex-none text-red-600 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium">{question.question}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Tu respuesta:{" "}
                          {question.options.find(
                            (opt) => opt.id === selectedAnswers[question.id]
                          )?.text || "No respondida"}
                        </p>
                        {selectedAnswers[question.id] !==
                          question.correctAnswer && (
                          <p className="text-sm text-green-600 mt-1">
                            Respuesta correcta:{" "}
                            {
                              question.options.find(
                                (opt) => opt.id === question.correctAnswer
                              )?.text
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <Button onClick={resetQuiz}>Intentar de nuevo</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
            <div className="text-sm text-gray-500">
              Pregunta {currentQuestion + 1} de {questions.length}
            </div>
          </div>
          <CardTitle className="text-2xl mt-4">
            {currentQuestionData.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[currentQuestionData.id] || ""}
            onValueChange={handleAnswerSelect}
            className="space-y-3"
          >
            {currentQuestionData.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors ${
                  selectedAnswers[currentQuestionData.id] === option.id
                    ? "bg-gray-100"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(option.id)}
              >
                <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                <Label
                  htmlFor={`option-${option.id}`}
                  className="flex-1 cursor-pointer"
                >
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Anterior
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestionData.id]}
          >
            {currentQuestion === questions.length - 1
              ? "Ver resultados"
              : "Siguiente"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
