

<div class="content-card" markdown="1">

#  Agentic engineering, part one. 

> See now the [working result]() of this exercise. 

**Getting the idea...**

After a couple of youtube videos I decide to dig deeper into more extended articles. So far Vibe coding and prompt engineering were two things the share the non deterministic output. The spec driven development (Sdd) concept came along, trying to fill the gap between the LLMs based solutions into something productive and reliable.

**The good old waterfall**

 Sdd isn't new, it's something I start doing when I get my first job. In order to produce a good peace of software, first you need to know what you're doing. That is the analysis phase, where people focused on understand a problem generate requirements (together with clients). With agile we get to the point where the a much detailed documentation wasn't so much relevant, that was in part because the software development moves from a more scientific or formal context to the web, when everyone wants to create a site or an app, and most of the time the client don't have a clue about what they want.

Agile focused on making working software, that will speak for itself. That was basically because making code was a hard thing to do, and making maintainable was even more complex. Design patterns emerge, clean code and all. And that suits perfect the industry, if the code its hard to do well don't waste time doing specification, lets all together discover what we want to build, and try to do it the best possible.

**Until...**

That was for a couple of decades, until chat gpt irrupt, and change a bit the making software idea. Right now LLM based agents can make entire refactors, and develop entire products. Now with a more faster programming pace, the problem goes back to define what we want, back to the specification.

With that making good software also becomes more easy. I made myself entire modules with tdd, but that takes so much time, and making design changes sometimes got avoid. Now I can tell an LLM agent to always creates all kind of testing suites. 

**I make something with adhoc sdd definition**

So I needed to get an excuse to create something with ssd, and see what happens. And the idea was to simulate how a code supply chain can operate. Next image defines a bit the main idea.

**Vendor choose**

To see how this works I choose **gemini cli**. First because its the first one I found with a free tier usable. The idea:

* Start from scratch, asking gemini cli to make the harness 
* Define the spec, plan and implement
* Iterate

The results were pretty good for a first try and without any framework or external tooling. 

* Gemini cli (and all the other llms chats I found) helped me to 
* I ran out of free quota a couple of times. 
* I create specs and several skills to help making the specs, plan and then code generation.

**Token Telemetry**

Along with the code I create an skill and rules to have telemetry for all the prompts I send. With the idea to create a dashboard and track how many input, reasoning and output tokens are needed through all the sdd Cycle. To give a more experimental touch to this exercise, and see later which ssd phase or user story implementation gets all the reasoning.

**Results**

This is a resulting dashoard out from the sdd implementation.

[See the result]()

### Conclusions

* Sometimes was a bit bored reduce all the fun code years into long markdown files
* You can see sdd in action, and working
* Token measurement, although pretty rudimentical, shows that the first part of sdd (the foundations) requires a lot of work and time to align the LLM agent to not hallucinate and follow the idea.
* Reminds me I had to work with programmers, people specialliced in understand requirements and turns them into code. If you don't define well the task troubled emerges. Now it's good and bad at the same time, the agent can redo and not conplain, but there's nothing like humans understanding the product context, vocabulary and all the things agents don't get (yet)

### Next steps

* Gemini cli has a pay as you go plan, when you pay for the used tokens. Maybe applying infrastructure FinOps principles to this exercise can be a good way to see weak points and ways to be more productive.
* Another good idea can be the finding ways to align the user pace with this new coding pace. Right now this kind of technoligy produces more code than the humans (software teams and clients) can process.

### References

> They are a few more, this ones are the most relevant for the exercise

- [Spec-Driven Development: From Code to Contract in the Age of AI Coding Assistants](https://arxiv.org/pdf/2602.00180){:target="_blank"}
- [Agent, Sub-Agent, Skill, or Tool? A Practitioner’s Guide to Extending Agentic AI Systems](https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.177204917.78786098/v1?onload=true){:target="_blank"}
- [Cómo mis agentes escribieron 200k líneas de código en producción - T3chFest 2026](https://www.youtube.com/watch?v=SUG-cEMFKFM)
- [Presentation](https://docs.google.com/presentation/d/1nMuN1xpDj5DUCTqOcewRSQuux6tEbnGs0h2B6m-K0co/edit?slide=id.p14#slide=id.p14)

</div>