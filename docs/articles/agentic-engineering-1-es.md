[🇬🇧](agentic-engineering-1.md) [🇪🇸 (AI generated)](agentic-engineering-1-es.md)

<div class="content-card" markdown="1" style="background:#b7dfcc">
## "Agile mató a la especificación porque programar era difícil. La IA está trayendo de vuelta la especificación porque ahora el código es barato, pero la dirección es cara."

> Mira ahora el [resultado de este post]() (en inglés).

</div>


<div class="content-card" markdown="1">

# Ingeniería Agéntica, parte uno.

**Captando la idea...**

Después de un par de videos en YouTube, decidí profundizar con artículos más extensos. Hasta ahora, el "Vibe coding" y el "prompt engineering" eran dos cosas que compartían una salida no determinista. El concepto de Desarrollo Dirigido por Especificaciones (Spec-Driven Development - SDD) apareció para intentar cerrar la brecha entre las soluciones basadas en LLM y algo productivo y confiable.

**El viejo y confiable Waterfall**

El SDD no es nuevo; es algo que empecé a hacer cuando conseguí mi primer trabajo. Para producir una buena pieza de software, primero necesitas saber qué estás haciendo. Esa es la fase de análisis, donde las personas se enfocan en entender un problema y generan requerimientos (junto con los clientes). Con Agile, llegamos a un punto donde mucha documentación detallada no era tan relevante; eso fue en parte porque el desarrollo de software pasó de un contexto más científico o formal a la web, donde todos quieren crear un sitio o una app, y la mayoría de las veces el cliente no tiene idea de lo que quiere.

Agile se centró en hacer software funcional que hablara por sí mismo. Eso fue básicamente porque escribir código era algo difícil de hacer, y hacerlo mantenible era aún más complejo. Surgieron los patrones de diseño, junto con el clean code y más. Esto se adaptó perfectamente a la industria: si el código es difícil de hacer bien, no pierdas tiempo haciendo especificaciones; descubramos todos juntos qué queremos construir y tratemos de hacerlo de la mejor manera posible.

**Hasta que...**

Ese fue el caso durante un par de décadas, hasta que ChatGPT irrumpió y cambió la idea de hacer software. Actualmente, los agentes basados en LLM pueden realizar refactorizaciones completas y desarrollar productos enteros. Ahora, con un ritmo de programación mucho más rápido, el problema vuelve a ser definir qué queremos: de vuelta a la especificación.

Con eso, hacer buen software también se vuelve más fácil. He hecho módulos enteros yo mismo con TDD, pero eso toma mucho tiempo, y a veces se evitaban cambios de diseño. Ahora puedo decirle a un agente LLM que cree siempre todo tipo de suites de prueba.

**Hice algo con una definición ad-hoc de SDD**

Entonces, necesitaba una excusa para crear algo con SDD y ver qué pasaba. La idea era simular cómo puede operar una cadena de suministro de código (code supply chain). La siguiente imagen define la idea principal.

**Elección de proveedor**

Para ver cómo funciona esto, elegí **Gemini CLI**. Primero, porque es el primero que encontré con un nivel gratuito usable. La idea:

* Empezar de cero, pidiendo a Gemini CLI que cree el entorno (harness).
* Definir la especificación (spec), planear e implementar.
* Iterar.

Los resultados fueron bastante buenos para un primer intento y sin ningún framework o herramienta externa.

* Gemini CLI (y todos los otros chats de LLM que encontré) me ayudaron.
* Me quedé sin cuota gratuita un par de veces.
* Creé especificaciones y varias "skills" para ayudar a crear las specs, planear y luego generar código.

**Telemetría de Tokens**

Junto con el código, creé una "skill" y reglas para tener telemetría de todos los prompts que envío, con la idea de crear un tablero (dashboard) y rastrear cuántos tokens de entrada, razonamiento y salida se necesitan a lo largo de todo el ciclo de SDD. Esto le da un toque más experimental a este ejercicio para ver más adelante qué fase de SDD o implementación de historia de usuario consume más razonamiento.

**Resultados**

Este es un tablero resultante de la implementación de SDD.

[Ver el resultado]()

### Conclusiones

* La transición de "escribir código" a "escribir especificaciones" es un cambio mental; cambia el golpe inmediato de dopamina de programar por la estabilidad a largo plazo de la arquitectura. Puedes empatizar con esos comentarios de "ya no es divertido".
* Se puede ver el SDD en acción y funcionando.
* La medición de tokens, aunque bastante rudimentaria, muestra que la primera parte del SDD (los cimientos) requiere mucho trabajo y tiempo para alinear al agente LLM para que no alucine y siga la idea.
* Me recuerda a tener que trabajar con programadores: personas especializadas en entender requerimientos y convertirlos en código. Si no defines bien la tarea, surgen problemas. Ahora es bueno y malo al mismo tiempo: el agente puede rehacer el trabajo y no quejarse, pero no hay nada como los humanos entendiendo el contexto del producto, el vocabulario y todas las cosas que los agentes no captan (aún).

### Próximos pasos

* Gemini CLI tiene un plan de pago por uso (pay-as-you-go) donde pagas por los tokens utilizados. Quizás aplicar principios de FinOps de infraestructura a este ejercicio puede ser una buena forma de ver puntos débiles y formas de ser más productivo.
* Otra buena idea puede ser encontrar formas de alinear el ritmo del usuario con este nuevo ritmo de programación. Actualmente, este tipo de tecnología produce más código del que los humanos (equipos de software y clientes) pueden procesar.

### Referencias

> Hay algunas más, pero estas son las más relevantes para el ejercicio.

- [Spec-Driven Development: From Code to Contract in the Age of AI Coding Assistants](https://arxiv.org/pdf/2602.00180){:target="_blank"}
- [Agent, Sub-Agent, Skill, or Tool? A Practitioner’s Guide to Extending Agentic AI Systems](https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.177204917.78786098/v1?onload=true){:target="_blank"}
- [Cómo mis agentes escribieron 200k líneas de código en producción - T3chFest 2026](https://www.youtube.com/watch?v=SUG-cEMFKFM){:target="_blank"} - [Presentación](https://docs.google.com/presentation/d/1nMuN1xpDj5DUCTqOcewRSQuux6tEbnGs0h2B6m-K0co/edit?slide=id.p14#slide=id.p14){:target="_blank"}


</div>