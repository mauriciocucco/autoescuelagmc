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
    question: "¿Cuál es distancia de seguridad a mantener un vehiculo?",
    options: [
      { id: "a", text: "10 segundos" },
      { id: "b", text: "15 segundos" },
      { id: "c", text: "2 segundos" },
      { id: "d", text: "15 segundos" },
    ],
    correctAnswer: "c",
  },
  {
    id: 2,
    question: "¿Qué es un carril de aceleración?",
    options: [
      { id: "a", text: "Es el carril derecho de una autopista" },
      { id: "b", text: "Es el carril izquierdo de una autopista" },
      { id: "c", text: "Es el carril de incorporación a una autopista" },
      { id: "d", text: "Ninguna de las anteriores" },
    ],
    correctAnswer: "c",
  },
  {
    id: 3,
    question:
      "Además de ser trasladado en el asiento trasero del vehículo, deberán ubicarse en el dispositivo de retención infantil los menores de:",
    options: [
      { id: "a", text: "13 kg" },
      { id: "b", text: "36 kg" },
      { id: "c", text: "27 kg" },
      { id: "d", text: "5 kg" },
    ],
    correctAnswer: "b",
  },
  {
    id: 4,
    question: "En el caso de niebla, ¿es mejor parar en la banquina?",
    options: [
      { id: "a", text: "Cuando la niebla está muy cerrada: si" },
      {
        id: "b",
        text: "Nunca. Si no hay otra posibilidad debe alejarse lo más posible de la calzada y de la banquina.",
      },
      { id: "c", text: "Siempre continuar" },
      { id: "d", text: "Cuando la niebla no está muy cerrada: si" },
    ],
    correctAnswer: "b",
  },
  {
    id: 5,
    question: "¿Qué se debe entender por bocacalle?",
    options: [
      {
        id: "a",
        text: "La zona de la calzada común a dos o más arterias, incluidas las sendas o pasos peatonales.",
      },
      {
        id: "b",
        text: "El lugar por donde se cruza una calle con una avenida",
      },
      { id: "c", text: "El lugar donde se cruzan 2 autopistas" },
      { id: "d", text: "Ninguna de las anteriores" },
    ],
    correctAnswer: "a",
  },
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
