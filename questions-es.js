const quizData = {
    "questions": [
        {
            "questionNumber": 1,
            "question": "España es:",
            "answerOptions": [
                {
                    "text": "a. una monarquía parlamentaria",
                    "isCorrect": true,
                    "rationale": "La Constitución española de 1978 establece que la forma política del Estado español es la monarquía parlamentaria."
                },
                {
                    "text": "b. una República Federal",
                    "isCorrect": false,
                    "rationale": "España no es una República Federal. La jefatura del Estado recae en el Rey, y la soberanía en el pueblo español."
                },
                {
                    "text": "c. una monarquía Federal",
                    "isCorrect": false,
                    "rationale": "Aunque se organiza en comunidades autónomas, España no es una monarquía federal, sino parlamentaria."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 2,
            "question": "La ley fundamental de España se llama:",
            "answerOptions": [
                {
                    "text": "a. Constitución",
                    "isCorrect": true,
                    "rationale": "La Constitución es la norma jurídica suprema de España, a la que están sujetas todas las leyes y normas."
                },
                {
                    "text": "b. ley básica",
                    "isCorrect": false,
                    "rationale": "Este no es el nombre oficial de la ley fundamental, aunque es la ley más básica del ordenamiento jurídico."
                },
                {
                    "text": "c. ordenamiento esencial",
                    "isCorrect": false,
                    "rationale": "Este término no se utiliza para referirse a la ley fundamental de España."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 3,
            "question": "Según la Constitución española, la soberanía nacional reside en:",
            "answerOptions": [
                {
                    "text": "a. el pueblo español",
                    "isCorrect": true,
                    "rationale": "La Constitución establece que la soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado."
                },
                {
                    "text": "b. el gobierno del Estado",
                    "isCorrect": false,
                    "rationale": "El Gobierno del Estado ejerce el poder ejecutivo, pero la soberanía reside en el pueblo."
                },
                {
                    "text": "c. el congreso de los diputados",
                    "isCorrect": false,
                    "rationale": "El Congreso de los Diputados es parte del poder legislativo y representa al pueblo, pero la soberanía no reside en él directamente."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 4,
            "question": "El instituto de las mujeres es:",
            "answerOptions": [
                {
                    "text": "a. una institución europea",
                    "isCorrect": false,
                    "rationale": "El Instituto de la Mujer, ahora conocido como Instituto de las Mujeres, es un organismo español."
                },
                {
                    "text": "b. un organismo español",
                    "isCorrect": true,
                    "rationale": "El Instituto de las Mujeres es un organismo público español adscrito al Ministerio de Igualdad, que tiene como objetivo la promoción de la igualdad real entre hombres y mujeres."
                },
                {
                    "text": "c. una ONG",
                    "isCorrect": false,
                    "rationale": "El Instituto de las Mujeres no es una organización no gubernamental (ONG), sino un organismo público del Estado español."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 5,
            "question": "¿Cuántas religiones oficiales hay en España?",
            "answerOptions": [
                {
                    "text": "a. ninguna",
                    "isCorrect": true,
                    "rationale": "La Constitución española establece que España es un Estado aconfesional, lo que significa que no tiene una religión oficial."
                },
                {
                    "text": "b. una",
                    "isCorrect": false,
                    "rationale": "España no tiene una religión de Estado, aunque se tienen en cuenta las creencias religiosas de la sociedad española, en especial la católica."
                },
                {
                    "text": "c. dos",
                    "isCorrect": false,
                    "rationale": "No existe un número de religiones oficiales; la libertad religiosa está garantizada para todos."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 6,
            "question": "El Castellano o español es lengua oficial:",
            "answerOptions": [
                {
                    "text": "a. en toda España",
                    "isCorrect": true,
                    "rationale": "Según la Constitución, el castellano es la lengua española oficial del Estado, y todos los españoles tienen el deber de conocerla y el derecho a usarla."
                },
                {
                    "text": "b. solo donde no hay otras lenguas",
                    "isCorrect": false,
                    "rationale": "El castellano es oficial en todo el territorio español, incluso en las comunidades autónomas con otras lenguas cooficiales."
                },
                {
                    "text": "c. en toda la Península ibérica",
                    "isCorrect": false,
                    "rationale": "En la Península Ibérica también se hablan otras lenguas como el portugués y el andorrano."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 7,
            "question": "¿Cuál de estas fuerzas de seguridad es de ámbito autonómico?",
            "answerOptions": [
                {
                    "text": "a. policía local",
                    "isCorrect": false,
                    "rationale": "La policía local es de ámbito municipal, no autonómico."
                },
                {
                    "text": "b. Guardia Civil",
                    "isCorrect": false,
                    "rationale": "La Guardia Civil es una fuerza de seguridad de ámbito nacional."
                },
                {
                    "text": "c. policía foral de Navarra",
                    "isCorrect": true,
                    "rationale": "La Policía Foral es la policía autonómica de Navarra, que tiene competencias en el territorio de esa comunidad."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 8,
            "question": "¿Qué fuerza de seguridad está en toda España?",
            "answerOptions": [
                {
                    "text": "a. la policía foral de Navarra",
                    "isCorrect": false,
                    "rationale": "La Policía Foral de Navarra es de ámbito autonómico y solo tiene competencias en la Comunidad Foral de Navarra."
                },
                {
                    "text": "b. el Cuerpo Nacional de Policía",
                    "isCorrect": true,
                    "rationale": "El Cuerpo Nacional de Policía (CNP) es una fuerza de seguridad de ámbito nacional que opera en todo el territorio español."
                },
                {
                    "text": "c. los mozos de escuadra",
                    "isCorrect": false,
                    "rationale": "Los Mossos d'Esquadra son la policía autonómica de Cataluña."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 9,
            "question": "En la Constitución se establece la separación de poderes: el poder ejecutivo, el legislativo y el:",
            "answerOptions": [
                {
                    "text": "a. judicial",
                    "isCorrect": true,
                    "rationale": "La separación de poderes, un principio fundamental del Estado de Derecho, se divide en poder legislativo, ejecutivo y judicial."
                },
                {
                    "text": "b. informativo",
                    "isCorrect": false,
                    "rationale": "El poder informativo no es uno de los tres poderes del Estado según la Constitución española."
                },
                {
                    "text": "c. político",
                    "isCorrect": false,
                    "rationale": "El poder político se relaciona con la toma de decisiones, pero la Constitución establece la separación en tres poderes específicos: ejecutivo, legislativo y judicial."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 10,
            "question": "La bandera de España debe utilizarse:",
            "answerOptions": [
                {
                    "text": "a. solo los días de fiesta oficial",
                    "isCorrect": false,
                    "rationale": "La bandera de España es un símbolo nacional que debe usarse en todos los edificios públicos y en los actos oficiales."
                },
                {
                    "text": "b. en todos los edificios públicos",
                    "isCorrect": true,
                    "rationale": "La ley establece que la bandera de España debe ondear en el exterior de todos los edificios públicos no militares del Estado y en el interior de los mismos en lugar preferente."
                },
                {
                    "text": "c. solo en actos del gobierno español",
                    "isCorrect": false,
                    "rationale": "La bandera debe usarse en todos los edificios públicos, no solo en los actos del gobierno."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 11,
            "question": "¿Quién fue el primer rey de España?",
            "answerOptions": [
                {
                    "text": "a. Fernando VII",
                    "isCorrect": false,
                    "rationale": "Fernando VII fue rey en el siglo XIX."
                },
                {
                    "text": "b. Carlos I",
                    "isCorrect": true,
                    "rationale": "Aunque la pregunta es ambigua, se entiende que se refiere al primer rey de la dinastía de los Austrias."
                },
                {
                    "text": "c. Juan Carlos I",
                    "isCorrect": false,
                    "rationale": "Juan Carlos I fue el rey que restauró la democracia en España."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 12,
            "question": "La gestión de la sanidad es competencia de:",
            "answerOptions": [
                {
                    "text": "a. el estado",
                    "isCorrect": false,
                    "rationale": "Aunque la sanidad es un derecho a nivel estatal, la gestión y la administración son competencia de las comunidades autónomas."
                },
                {
                    "text": "b. las comunidades autónomas",
                    "isCorrect": true,
                    "rationale": "La gestión y provisión de los servicios de sanidad pública están transferidos a las comunidades autónomas."
                },
                {
                    "text": "c. los ayuntamientos",
                    "isCorrect": false,
                    "rationale": "Los ayuntamientos gestionan servicios locales, pero no la sanidad."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 13,
            "question": "¿Quién fue el primer presidente del gobierno de España en democracia?",
            "answerOptions": [
                {
                    "text": "a. Mariano Rajoy",
                    "isCorrect": false,
                    "rationale": "Mariano Rajoy fue presidente del gobierno de España en el siglo XXI."
                },
                {
                    "text": "b. Adolfo Suárez",
                    "isCorrect": true,
                    "rationale": "Adolfo Suárez fue el primer presidente del gobierno de la democracia española, y fue una figura clave en la Transición."
                },
                {
                    "text": "c. José Luis Rodríguez Zapatero",
                    "isCorrect": false,
                    "rationale": "José Luis Rodríguez Zapatero fue presidente del gobierno en el siglo XXI."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 14,
            "question": "¿Cuál de estos organismos se encarga de interpretar la Constitución?",
            "answerOptions": [
                {
                    "text": "a. el poder constitucional",
                    "isCorrect": false,
                    "rationale": "No existe un órgano con ese nombre."
                },
                {
                    "text": "b. el tribunal constitucional",
                    "isCorrect": true,
                    "rationale": "El Tribunal Constitucional es el máximo intérprete de la Constitución y vela por su cumplimiento."
                },
                {
                    "text": "c. el consejo general del poder judicial",
                    "isCorrect": false,
                    "rationale": "El Consejo General del Poder Judicial es el órgano de gobierno de los jueces y magistrados, pero no interpreta la Constitución."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 15,
            "question": "¿Quién modera el funcionamiento de las instituciones españolas?",
            "answerOptions": [
                {
                    "text": "a. el presidente del gobierno",
                    "isCorrect": false,
                    "rationale": "El Presidente del Gobierno dirige la política y la administración del Estado."
                },
                {
                    "text": "b. El Rey",
                    "isCorrect": true,
                    "rationale": "Según la Constitución, el Rey es el jefe de Estado y modera el funcionamiento de las instituciones."
                },
                {
                    "text": "c. el director de la Real Academia Española",
                    "isCorrect": false,
                    "rationale": "La Real Academia Española se ocupa de la lengua, no del funcionamiento de las instituciones del Estado."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 16,
            "question": "¿Cómo se llama la cámara de representación territorial en España?",
            "answerOptions": [
                {
                    "text": "a. senado",
                    "isCorrect": true,
                    "rationale": "El Senado es la cámara de representación territorial de las Cortes Generales."
                },
                {
                    "text": "b. diputación permanente",
                    "isCorrect": false,
                    "rationale": "La Diputación Permanente es un órgano que funciona cuando las Cortes están disueltas."
                },
                {
                    "text": "c. congreso de los diputados",
                    "isCorrect": false,
                    "rationale": "El Congreso de los Diputados representa al pueblo español en su conjunto, no a los territorios."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 17,
            "question": "¿Cuántas ciudades autónomas hay en España?",
            "answerOptions": [
                {
                    "text": "a. 17",
                    "isCorrect": false,
                    "rationale": "Este es el número de comunidades autónomas."
                },
                {
                    "text": "b. 2",
                    "isCorrect": true,
                    "rationale": "Las dos ciudades autónomas de España son Ceuta y Melilla."
                },
                {
                    "text": "c. 50",
                    "isCorrect": false,
                    "rationale": "Este es el número de provincias."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 18,
            "question": "¿Cómo se aprobó la Constitución?",
            "answerOptions": [
                {
                    "text": "a. por ley",
                    "isCorrect": false,
                    "rationale": "Aunque es la ley fundamental, su aprobación requirió un paso adicional."
                },
                {
                    "text": "b. en referéndum",
                    "isCorrect": true,
                    "rationale": "La Constitución española de 1978 fue sometida a un referéndum para su aprobación final."
                },
                {
                    "text": "c. lo mandó el rey",
                    "isCorrect": false,
                    "rationale": "El Rey sanciona las leyes, pero no es quien las aprueba por sí solo."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 19,
            "question": "¿Cómo se llama la ley más importante de cada comunidad Autónoma?",
            "answerOptions": [
                {
                    "text": "a. estatuto de autonomía",
                    "isCorrect": true,
                    "rationale": "El Estatuto de Autonomía es la norma institucional básica de cada comunidad autónoma."
                },
                {
                    "text": "b. normativa autonómica",
                    "isCorrect": false,
                    "rationale": "La normativa autonómica es un término general que se refiere a las leyes y reglamentos de la comunidad, pero no a la ley fundamental."
                },
                {
                    "text": "c. ley de la comunidad",
                    "isCorrect": false,
                    "rationale": "La ley de la comunidad es un término general, pero no el nombre oficial de la ley más importante de una comunidad autónoma."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 20,
            "question": "Las instalaciones culturales y deportivas públicas son competencia del:",
            "answerOptions": [
                {
                    "text": "a. ayuntamiento",
                    "isCorrect": true,
                    "rationale": "La gestión de instalaciones culturales y deportivas de uso público es competencia de la administración local, es decir, del ayuntamiento."
                },
                {
                    "text": "b. Ministerio de Educación, Formación Profesional y Deportes",
                    "isCorrect": false,
                    "rationale": "Este ministerio gestiona las políticas a nivel estatal, pero no las instalaciones locales."
                },
                {
                    "text": "c. Ministerio de Igualdad",
                    "isCorrect": false,
                    "rationale": "El Ministerio de Igualdad tiene otras competencias, no la gestión de instalaciones culturales y deportivas."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 21,
            "question": "¿Quién dirige la administración militar de España?",
            "answerOptions": [
                {
                    "text": "a. los ayuntamientos",
                    "isCorrect": false,
                    "rationale": "Los ayuntamientos se ocupan de la administración local."
                },
                {
                    "text": "b. el gobierno",
                    "isCorrect": true,
                    "rationale": "El Gobierno del Estado, a través del Presidente, dirige la administración civil y militar y la defensa del Estado."
                },
                {
                    "text": "c. las Cortes Generales",
                    "isCorrect": false,
                    "rationale": "Las Cortes Generales ejercen el poder legislativo y controlan al Gobierno, pero no dirigen la administración militar."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 22,
            "question": "¿Qué hay en las Islas Baleares en vez de diputaciones?",
            "answerOptions": [
                {
                    "text": "a. cabildos",
                    "isCorrect": false,
                    "rationale": "Los cabildos son los órganos de gobierno insulares en Canarias."
                },
                {
                    "text": "b. consejos insulares",
                    "isCorrect": true,
                    "rationale": "En las Islas Baleares, el gobierno y la administración de cada isla corresponden a los consejos insulares."
                },
                {
                    "text": "c. congresos",
                    "isCorrect": false,
                    "rationale": "Los congresos son parte de las Cortes Generales."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 23,
            "question": "¿Qué ciudad tiene más habitantes?",
            "answerOptions": [
                {
                    "text": "a. Sevilla",
                    "isCorrect": false,
                    "rationale": "Sevilla es la cuarta ciudad más poblada de España, detrás de Madrid, Barcelona y Valencia."
                },
                {
                    "text": "b. Barcelona",
                    "isCorrect": true,
                    "rationale": "Barcelona es la segunda ciudad más poblada de España, después de Madrid."
                },
                {
                    "text": "c. Zaragoza",
                    "isCorrect": false,
                    "rationale": "Zaragoza es la quinta ciudad más poblada de España."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 24,
            "question": "Las Cortes Generales representan:",
            "answerOptions": [
                {
                    "text": "a. al pueblo español",
                    "isCorrect": true,
                    "rationale": "La Constitución establece que las Cortes Generales representan al pueblo español."
                },
                {
                    "text": "b. a los partidos políticos",
                    "isCorrect": false,
                    "rationale": "Las Cortes Generales están formadas por miembros de partidos políticos, pero su función es representar a toda la ciudadanía."
                },
                {
                    "text": "c. a los ministros",
                    "isCorrect": false,
                    "rationale": "Los ministros forman parte del Gobierno, que es un poder distinto al legislativo."
                }
            ]
        }, // <--- ¡COMA NECESARIA!
        {
            "questionNumber": 25,
            "question": "El congreso de los diputados y el senado constituyen el poder:",
            "answerOptions": [
                {
                    "text": "a. ejecutivo",
                    "isCorrect": false,
                    "rationale": "El poder ejecutivo lo ostenta el Gobierno."
                },
                {
                    "text": "b. legislativo",
                    "isCorrect": true,
                    "rationale": "Las Cortes Generales, compuestas por el Congreso de los Diputados y el Senado, ejercen el poder legislativo del Estado."
                },
                {
                    "text": "c. judicial",
                    "isCorrect": false,
                    "rationale": "El poder judicial está en manos de jueces y magistrados."
                }
            ]
        } // <--- ¡NO COMA AQUÍ!
    ]
};