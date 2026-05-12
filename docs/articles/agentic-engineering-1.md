[🇬🇧](agentic-engineering-1.md) [🇪🇸](agentic-engineering-1-es.md)

<div class="content-card" markdown="1" style="background:#b7dfcc">
## "Agile killed the spec to focus on the craft of code. AI is bringing the spec back because code is now 'cheap,' but directing synthetic programmers who lack self-awareness is the new high-stakes challenge."

> See now the [working result]() of this post.

</div>


<div class="content-card" markdown="1">

# Agentic engineering, part one.

Agile prioritized working code because human expertise and time were the primary bottlenecks. AI is bringing the specification back because code has become a commodity; the new challenge is providing synthetic programmers—who lack self-awareness—with the right architectural direction.

**Getting the idea...**

After a couple of YouTube videos, I decided to dig deeper into more extended articles. So far, Vibe coding and prompt engineering were two things that shared non-deterministic output. The Spec-Driven Development (SDD) concept came along, trying to fill the gap between LLM-based solutions and something productive and reliable.

**The good old waterfall**

SDD isn't new; it's something I started doing when I got my first job back on 2010 👴🏼. In order to produce a good piece of software, first you need to know what you're doing. That is the analysis phase, where people focused on understanding a problem generate requirements (together with clients). With Agile, we reached a point where much detailed documentation wasn't as relevant; that was in part because software development moved from a more scientific or formal context to the web, where everyone wants to create a site or an app, and most of the time the client doesn't have a clue about what they want.

Agile focused on making working software that would speak for itself. That was basically because writing code was a hard thing to do, and making it maintainable was even more complex. Design patterns emerged, along with clean code and more. This suited the industry perfectly: if code is hard to do well, don't waste time doing specifications; let's all discover together what we want to build and try to do it the best way possible.

**Until...**

That was the case for a couple of decades, until ChatGPT irrupted and changed the idea of making software. Right now, LLM-based agents can perform entire refactors and develop entire products. Now, with a much faster programming pace, the problem goes back to defining what we want—back to the specification.

With that, making good software also becomes easier. I have made entire modules myself with TDD in c++, but that takes so much time, and making design changes sometimes was avoided. Now I can tell an LLM agent to always create all kinds of testing suites.

**I made something with an ad-hoc SDD definition**

So, I needed an excuse to create something with SDD and see what happens. The idea was to simulate how a code supply chain can operate. The next image defines the main idea.

![alt text](image-2.png)

**Phases**

### Proposed Phase Descriptions

* **Foundations (Setting the Harness):** Establishing the project’s governance model. This includes defining architectural boundaries in `GEMINI.md`, configuring agent skills, and locking in the tech stack. The harness acts as the "deterministic scaffolding" required to secure the implementation and prevent agent divergence.
* **Specs (Defining the Contract):** A bidirectional analysis phase where the "What" is formalized. Through a back-and-forth dialogue with the LLM CLI, requirements are transformed into persistent Markdown specifications that serve as the single source of truth for the entire supply chain.
* **Planning (Strategic Decomposition):** The LLM agent takes the "driver's seat" to deconstruct complex specs into a finite, actionable set of implementation tasks. Because the subsequent implementation is unattended, this phase requires a formal human sign-off to ensure the plan aligns with the intended architecture.
* **Implementation (Constrained Autonomy):** The LLM agent executes the plan autonomously. It consumes the specs, respects the harness rules, and generates the codebase. This phase concludes with the creation of a branch and a Pull Request, transitioning the work from "synthetic" generation back to human oversight.
* **Validation (Human-in-the-Loop Quality Gate):** A critical review phase where the autonomous output is audited by human experts. The implementation is validated against the original specs; once the PR is approved, the code is merged into the productive branch, completing the cycle.

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

### Results

This is a resulting dashboard from the SDD implementation.

[See the dashboard](https://c11r11.github.io/agentic-factory-showcase/){:target="_blank"}

**Some Notes**

* This dashboard provides a transparent window into the "Synthetic Labor" of this exercise.
* The token count is real, all the information was collected during the process of making the dashboard and the backend who process it.
* An slice is a peace of software to build. A user story.
* Production Efficiency is the yield ratio between Total Lifecycle Consumption and Functional Output Tokens. A low initial percentage is expected—it represents the 'Architecture Tax' required to stabilize the Agentic Harness. As the project's context and constraints (via GEMINI.md) mature, this metric serves as a primary indicator of harness health. If efficiency fails to scale, it points to a systemic failure in the project's prompt-context alignment.

## Conclusions

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
- [Agent Harness for Large Language Model Agents: A Survey](http://preprints.org/frontend/manuscript/1cceb6ffec11d44f73a135899b974632/download_pub)
- [Cómo mis agentes escribieron 200k líneas de código en producción - T3chFest 2026](https://www.youtube.com/watch?v=SUG-cEMFKFM){:target="_blank"} - [Presentación](https://docs.google.com/presentation/d/1nMuN1xpDj5DUCTqOcewRSQuux6tEbnGs0h2B6m-K0co/edit?slide=id.p14#slide=id.p14){:target="_blank"}

</div>