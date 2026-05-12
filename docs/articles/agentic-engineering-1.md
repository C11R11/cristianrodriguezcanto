<div class="content-card" markdown="1" style="background:#b7dfcc">
## "Agile killed the specification because code was hard. AI is bringing the specification back because code is now cheap, but direction is expensive."

> See now the [working result]() of this post.

</div>


<div class="content-card" markdown="1">

# Agentic engineering, part one.

**Getting the idea...**

After a couple of YouTube videos, I decided to dig deeper into more extended articles. So far, Vibe coding and prompt engineering were two things that shared non-deterministic output. The Spec-Driven Development (SDD) concept came along, trying to fill the gap between LLM-based solutions and something productive and reliable.

**The good old waterfall**

SDD isn't new; it's something I started doing when I got my first job. In order to produce a good piece of software, first you need to know what you're doing. That is the analysis phase, where people focused on understanding a problem generate requirements (together with clients). With Agile, we reached a point where much detailed documentation wasn't as relevant; that was in part because software development moved from a more scientific or formal context to the web, where everyone wants to create a site or an app, and most of the time the client doesn't have a clue about what they want.

Agile focused on making working software that would speak for itself. That was basically because writing code was a hard thing to do, and making it maintainable was even more complex. Design patterns emerged, along with clean code and more. This suited the industry perfectly: if code is hard to do well, don't waste time doing specifications; let's all discover together what we want to build and try to do it the best way possible.

**Until...**

That was the case for a couple of decades, until ChatGPT irrupted and changed the idea of making software. Right now, LLM-based agents can perform entire refactors and develop entire products. Now, with a much faster programming pace, the problem goes back to defining what we want—back to the specification.

With that, making good software also becomes easier. I have made entire modules myself with TDD, but that takes so much time, and making design changes sometimes was avoided. Now I can tell an LLM agent to always create all kinds of testing suites.

**I made something with an ad-hoc SDD definition**

So, I needed an excuse to create something with SDD and see what happens. The idea was to simulate how a code supply chain can operate. The next image defines the main idea.

**Vendor choice**

To see how this works, I chose **Gemini CLI**. First, because it is the first one I found with a usable free tier. The idea:

* Start from scratch, asking Gemini CLI to make the harness
* Define the spec, plan, and implement
* Iterate

The results were pretty good for a first try and without any framework or external tooling.

* Gemini CLI (and all the other LLM chats I found) helped me.
* I ran out of free quota a couple of times.
* I created specs and several skills to help make the specs, plan, and then generate code.

**Token Telemetry**

Along with the code, I created a skill and rules to have telemetry for all the prompts I send, with the idea to create a dashboard and track how many input, reasoning, and output tokens are needed through the entire SDD cycle. This gives a more experimental touch to this exercise to see later which SDD phase or user story implementation consumes the most reasoning.

**Results**

This is a resulting dashboard from the SDD implementation.

[See the result]()

### Conclusions

* The transition from 'writing code' to 'writing specifications' is a mental shift; it trades the immediate dopamine hit of coding for the long-term stability of architecture. You can emphatize with those "it's not fun anymore" comments.
* You can see SDD in action and working.
* Token measurement, although pretty rudimentary, shows that the first part of SDD (the foundations) requires a lot of work and time to align the LLM agent so it doesn't hallucinate and follows the idea.
* It reminds me of having to work with programmers—people specialized in understanding requirements and turning them into code. If you don't define the task well, trouble emerges. Now it's good and bad at the same time: the agent can redo the work and not complain, but there's nothing like humans understanding the product context, vocabulary, and all the things agents don't get (yet).

### Next steps

* Gemini CLI has a pay-as-you-go plan where you pay for the used tokens. Maybe applying infrastructure FinOps principles to this exercise can be a good way to see weak points and ways to be more productive.
* Another good idea can be finding ways to align the user pace with this new coding pace. Right now, this kind of technology produces more code than humans (software teams and clients) can process.

### References

> There are a few more, but these are the most relevant for the exercise.

- [Spec-Driven Development: From Code to Contract in the Age of AI Coding Assistants](https://arxiv.org/pdf/2602.00180){:target="_blank"}
- [Agent, Sub-Agent, Skill, or Tool? A Practitioner’s Guide to Extending Agentic AI Systems](https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.177204917.78786098/v1?onload=true){:target="_blank"}
- [Cómo mis agentes escribieron 200k líneas de código en producción - T3chFest 2026](https://www.youtube.com/watch?v=SUG-cEMFKFM)
- [Presentation](https://docs.google.com/presentation/d/1nMuN1xpDj5DUCTqOcewRSQuux6tEbnGs0h2B6m-K0co/edit?slide=id.p14#slide=id.p14)

</div>