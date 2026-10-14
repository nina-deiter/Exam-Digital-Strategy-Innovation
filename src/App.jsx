import React from 'react';

// Study site: summary + flashcards. Add a chapter by appending an object to CHAPTERS.

const CHAPTERS = [
  {
    id: "bmd",
    title: "Business Model Design",
    subtitle: "Script 1 · From value proposition to full canvas",
    summary: [
      {
        title: "Core idea",
        intro:
          "A business model describes how an organisation creates, delivers and captures value: for whom it creates which products or services, and how. It is about more than revenue. All parts must fit together, and the model can evolve over time.",
        points: [],
      },
      {
        title: "Mission and value proposition",
        points: [
          ["Mission", "The why. Netflix: \"Entertain the world.\""],
          ["Value proposition", "The how. Netflix: an on-demand, personalised entertainment experience."],
          ["Four elements", "Target audience, specific problem solved, unique solution, clear differentiation."],
          ["Guides", "Product design, marketing strategy and sales focus."],
        ],
      },
      {
        title: "Business Model Canvas",
        intro: "A one-page tool with 9 building blocks. The value proposition sits at the centre.",
        points: [
          ["Front stage (customer-facing)", "Customer segments (defined by a shared problem, not demographics), channels (value delivery as much as communication), customer relationships (personal, platform, partners)."],
          ["Back stage (internal)", "Key activities (what drives value and sets scalability), key resources (people, software, IP, machines, money; they drive costs), key partners (suppliers and allies; they add dependency and share margin)."],
          ["Profit formula", "Revenue streams (what each segment pays and the pricing model) and cost structure (fixed and variable costs). Together they show whether the model earns more than it consumes."],
        ],
      },
      {
        title: "Examples from the script",
        points: [
          ["Perlego", "On-demand access to academic books; channels follow the value proposition."],
          ["Airbnb", "No operations, no real estate, no hotels. Focus on data science and marketing; key resources are engineers, data and the platform; hosts are key partners."],
          ["Wise", "Visible fee per transfer. Revenue follows volume moved, \"the pricing is the product\"."],
          ["Ryanair", "One aircraft type, secondary airports, fast turnarounds. Lowest cost per seat."],
        ],
      },
      {
        title: "From as-is to what-if",
        points: [
          ["1. Map as-is", "Describe the current canvas: front stage, back stage, profit formula."],
          ["2. Compare", "Competitors (where you are different vs. at parity) and other industries (borrow one block, translate the mechanism, do not copy). Zalando vs. department store: \"Three blocks decided the market.\" Philips sells light per hour instead of lamps."],
          ["3. Design as-could-be", "Rewrite one block, follow the effects on activities, partners and costs, name the trade-off, define the smallest test."],
        ],
      },
      {
        title: "Conclusion",
        points: [
          ["Canvas", "A map of the business model."],
          ["Profit formula", "Decides whether the model pays."],
          ["Comparison", "Turns the map into a shortlist of options."],
          ["Order", "Start with customer segments and value proposition. A rough comparison is enough: look for differences, not precision."],
        ],
      },
    ],
    cards: [
      { q: "What is a business model?", a: "A representation of how an organisation creates, delivers and captures value, i.e. for whom it creates which products or services and how it does so." },
      { q: "Why is a business model more than revenue?", a: "It shows how all the pieces fit together to create and deliver value. Revenue is only one part of it." },
      { q: "Is a business model static?", a: "No. It can evolve over time (it is \"organic\")." },
      { q: "What is the difference between mission and value proposition?", a: "The mission describes the why (the reason the company exists). The value proposition describes the how (how the mission is accomplished)." },
      { q: "What are Netflix's mission and value proposition?", a: "Mission: \"Entertain the world.\" Value proposition: an on-demand, personalised entertainment experience." },
      { q: "What are the four elements of a value proposition?", a: "Target audience, the specific problem solved, the unique solution provided, and clear market differentiation." },
      { q: "What does a value proposition guide?", a: "Product or service design, marketing strategy and sales focus. It also defines market position and differentiation from competitors." },
      { q: "What is the Business Model Canvas?", a: "A one-page tool with 9 building blocks that maps how a company creates, delivers and captures value." },
      { q: "Which building block is at the core of the canvas?", a: "The value proposition." },
      { q: "Which blocks belong to the front stage?", a: "Customer segments, value proposition, channels, customer relationships." },
      { q: "Which blocks belong to the back stage?", a: "Key activities, key resources, key partners." },
      { q: "Which blocks make up the profit formula?", a: "Revenue streams and cost structure." },
      { q: "What does the profit formula show?", a: "Whether the model earns more than it consumes and at what scale it starts to work (margin, break-even)." },
      { q: "How is a customer segment defined?", a: "By a shared problem that all its customers suffer from. It is about context, needs and ambitions, not primarily age or gender." },
      { q: "Can one core value serve several customer segments?", a: "Yes, in the same or in different ways." },
      { q: "What are channels in the canvas?", a: "The ways you communicate with customers and deliver your value. Channels are mainly about value delivery and are shaped by your customer segments." },
      { q: "Give the Perlego example for channels.", a: "Perlego is a platform for academic books offering on-demand reading. Customers do not buy a book, so the value proposition strongly influences the channels used." },
      { q: "What do customer relationships describe?", a: "How you serve customers and deliver value, e.g. personally, through service, a platform or partners." },
      { q: "Why do Netflix and a cinema have different customer relationships despite similar missions?", a: "Netflix delivers on demand via a platform, while the cinema offers a physical experience. The relationships therefore differ strongly." },
      { q: "What are key activities?", a: "The vital tasks the company itself executes to deliver the promised value (e.g. marketing, sales, product development)." },
      { q: "Why are key activities important?", a: "They determine how much control you have over operations and how quickly you can scale or pivot (the bottleneck)." },
      { q: "What does the Airbnb example show for key activities?", a: "Airbnb has no traditional operations. Its main activities are data science (analysing and predicting) and marketing." },
      { q: "What are key resources?", a: "The resources needed to carry out key activities: human, software, intellectual property, machines, money." },
      { q: "How do key resources affect costs?", a: "Together with key activities they drive most of the cost structure and set the limit on how fast you can scale." },
      { q: "What are Airbnb's key resources?", a: "Engineers, its data and the platform itself. It does not need real estate." },
      { q: "What are key partners?", a: "The external network of suppliers, distributors, alliances and outsourcing partners you rely on to deliver the promised value." },
      { q: "What is the drawback of a partnership?", a: "It creates a dependency and shares part of your margin." },
      { q: "Who are Airbnb's key partners?", a: "Its hosts (who supply the entire inventory), payment providers and insurers (covering transactions and trust)." },
      { q: "What are revenue streams?", a: "The money each customer segment actually pays you, and the pricing model through which you capture it (e.g. sales, subscription, fee, licence, advertising, commission)." },
      { q: "Why does the pricing model matter?", a: "It decides who pays, when they pay, and how predictable your income is. \"The pricing is the product.\"" },
      { q: "Give the Wise example for revenue streams.", a: "Wise charges a visible fee per transfer instead of hiding a margin in the exchange rate. Revenue follows the volume moved, not the number of accounts held." },
      { q: "What is the cost structure?", a: "The cost of running the back stage: fixed costs you carry regardless, and variable costs that grow with every customer served." },
      { q: "What is the margin, and why compare costs with revenues?", a: "The margin is the gap between revenues and costs. Comparing them shows where the model makes or loses money, where the break-even point lies, and whether growth strengthens or weighs down the model." },
      { q: "How does the Ryanair example illustrate cost structure?", a: "Ryanair flies a single aircraft type from secondary airports and turns planes around in minutes. Every choice aims at the lowest cost per seat. The fare is low because the cost is low." },
      { q: "What is the \"as is\" step?", a: "Describing the business model you already run, i.e. mapping the canvas as it is today." },
      { q: "What are the two lenses for \"what if\"?", a: "Competitors (where your model is different and where it is only at parity) and other industries (models that solve a similar problem in a different way)." },
      { q: "What does \"parity\" mean in a canvas comparison?", a: "A block is answered the same way as by everyone else. That is not differentiation; you are paying just to keep up." },
      { q: "What does \"three blocks decided the market\" mean (Zalando example)?", a: "Zalando and a department store sell the same brands to the same people. They differ only in channels, cost base and free returns policy. Those blocks are the actual competition." },
      { q: "What does \"Translate, do not copy\" mean?", a: "Ask what makes a block work in another industry, then transfer the mechanism to your own world instead of copying the whole model." },
      { q: "What does the Philips example show?", a: "Philips stopped selling lighting fittings and started selling light per hour, keeping ownership of the fittings. The pricing logic came from leasing, not from lighting: same product, different model." },
      { q: "What are the three steps of \"as could be\"?", a: "1. Rewrite the block you most wish were yours, 2. follow the changes through activities, partners and costs, 3. name the trade-off and define the smallest test." },
      { q: "Why change only one block at a time?", a: "Business models shift block by block, and each shift is a test you can run. This keeps the risk manageable." },
      { q: "Where do you start if your model has never been written down?", a: "With customer segments and value proposition, because everything else follows from who you serve and what you promise them." },
      { q: "What are the key highlights of a business model?", a: "Value: the pieces fit together to create value. Organic: it is not static and evolves over time. Representation: it is a representation that clarifies how the business operates." },
      { q: "What does the front stage include?", a: "The front stage includes all client-facing aspects of a business model and the customer segment." },
      { q: "How accurate does a competitor's canvas need to be?", a: "Rough is enough. The value lies in the comparison and the differences, not in precision or a valuation." },
    ],
  },
  {
    id: "dt",
    title: "UNDERSTAND HOW DESIGN THINKING HELPS US DEVELOP BETTER INNOVATIONS",
    subtitle: "Script 2 · Design Thinking",
    summary: [
      {
        title: "About this script",
        intro:
          "Design thinking is a human-centred approach to innovation. The script is based on Osterwalder et al. (2020), The Invincible Company. ",
        points: [],
      },
      {
        title: "Innovation and design",
        figures: ["doubleDiamond", "ideo"],
        points: [
          ["Innovation", "The process of bringing about new ideas, methods, products, services or solutions that have a significant positive impact and value."],
          ["Open innovation", "A business and management paradigm stating that companies should use both external and internal ideas, and both internal and external paths to market, to advance their technology and products."],
          ["Danish design ladder", "Four levels of design maturity: 1. Non-design (design is invisible, not handled by trained designers). 2. Design as form-giving (design is only the final styling stage). 3. Design as process (the solution is driven by the problem and users, with many skills involved). 4. Design as strategy (designers help rethink the business concept itself)."],
          ["Simon’s decision-making model", "Three phases: intelligence (observe reality, understand the problem, gather information), design (develop criteria, alternatives and recommended actions), choice (logically evaluate the alternatives and decide)."],
          ["Double Diamond (British Design Council)", "A model of the design process with two diamonds. Each diamond first diverges (explores many options) and then converges (focuses on one). The first diamond (Discover and Define) explores and defines the problem. The second diamond (Develop and Deliver) explores and delivers the solution."],
          ["IDEO’s Inspiration, Ideation, Implementation", "Inspiration: understand the people and the problem and what motivates the search for a solution. Ideation: generate, develop and test ideas. Implementation: bring the best solution to market and plan how it will be adopted."],
        ],
      },
      {
        title: "What design thinking is",
        intro:
          "Design thinking is a human-centred approach to innovation. It draws on the designer’s toolkit to integrate the needs of people, the possibilities of technology and the requirements for business success. It is a set of cognitive, strategic and practical procedures, and a body of knowledge about how people reason when working on design problems.",
        points: [],
      },
      {
        title: "How designers think",
        points: [
          ["Inductive reasoning", "Deriving a general principle from a set of observations (“This swan is white… therefore all swans are white”)."],
          ["Deductive reasoning", "Drawing a true conclusion from premises via logically valid steps (“All humans are mortal; Socrates is human; therefore Socrates is mortal”)."],
          ["Abductive reasoning", "Finding the simplest and most likely explanation for an observation. It reasons by analogy and yields a plausible conclusion that is not yet verified (“The grass is wet; the best explanation is that it rained”)."],
        ],
      },
      {
        title: "How design thinking differs",
        points: [
          ["Problem solving", "Addresses wicked problems: problems with incomplete, contradictory and changing requirements, which are often hard to recognise."],
          ["User-centred", "Builds empathy with diverse groups through research or participatory processes."],
          ["Iterative", "Learns by trial and error, testing many possible solutions as sketches or prototypes."],
          ["Abductive", "Imagines what might be rather than analysing what is. It takes an assertion-based attitude to solutions rather than an evidence-based one."],
          ["Wicked problems", "Design thinking shifts the goal from finding one “correct” solution to understanding complexity, reducing risk and driving meaningful solutions. Look below the surface: patterns, structures and mental models."],
          ["Misconceptions", "Design thinking is not only for designers (anyone can apply it). It does not guarantee success; it increases the chances of success. It is not a checkbox, and it takes time."],
        ],
      },
      {
        title: "Principles and the five steps",
        figures: ["fiveSteps"],
        intro:
          "Design thinking is an iterative, non-linear process that focuses on collaboration between designers and users. It brings solutions to life based on how real users think, feel and behave.",
        points: [
          ["1. Empathise", "Goal: understand the user’s context, experiences, feelings and wants. How: interview, shadow and conduct desk research to understand needs, aspirations and context. Outcome: insights, observations and an empathy map."],
          ["2. Define", "Goal: a clearly articulated problem. How: synthesise findings to come to a clear problem definition. Beyond a plethora of assumptions, we get a shared understanding of the real problem at stake. Outcome: a “Point of View” (POV) statement and a series of “How Might We” questions."],
          ["3. Ideate", "Goal: as many ideas as possible. How: generate as many solutions as possible, whether worthless or not, without judging them. Outcome: an extensive list from which to choose."],
          ["4. Prototype", "Goal: make ideas tangible. How: make selected ideas tangible to discuss and test, from sketches and mock-ups to, sometimes, usable versions. Outcome: low-fidelity prototypes or clickable mock-ups."],
          ["5. Test", "Goal: learn what works. How: test solutions with real users and gather feedback. Outcome: insights that feed the next iteration."],
          ["Why this order?", "You cannot define a problem without understanding the user (“If you ask the wrong question, you get the wrong answer”). You cannot generate good solutions without a clear problem. You can only prototype when an idea is clearly defined. Testing gathers feedback on a tangible expression of your ideas."],
        ],
      },
      {
        title: "Human-centred design",
        points: [
          ["Why it matters", "80% of products that fail do so because they do not meet user needs (CB Insights). Example: the Segway (2001) was technically brilliant but failed, because its makers did not understand what people wanted: a practical solution for short distances."],
          ["Impact", "Companies that apply human-centred design see 32% higher customer satisfaction (Forrester)."],
          ["How to apply", "Empathy (understand the world through the user’s eyes), research (gather real insights, not assumptions) and co-creation (involve users in the design process)."],
          ["Pitfalls", "Projecting your own beliefs (“I would want this, so the user does too”), assuming you know what the user wants, and superficial empathy (only listening to what users say)."],
        ],
      },
      {
        title: "Iterative process",
        figures: ["iterativeLoop"],
        points: [
          ["What is an iterative process", "A process where you learn quickly through repetition and adjustment. Instead of waiting for a solution to be perfect, you test early and often and adapt based on feedback."],
          ["Why iterate", "No perfect solution comes in one try. Testing early shows quickly what works and what does not. Companies that test early bring products to market 2x faster (McKinsey). 75% of users change their behaviour when testing a prototype (NN/g)."],
          ["Approaches", "Lean Startup: build a Minimum Viable Product (MVP), measure, learn and adapt. Design thinking: create a prototype (not necessarily perfect), test it with real users. Fail fast and learn: see failure as learning, not defeat."],
          ["Pitfalls", "Testing too late, no iteration (assuming the first solution is best), no learning (iterating without learning)."],
        ],
      },
      {
        title: "Abductive reasoning",
        intro: "A form of logical reasoning that generates new ideas by seeking the best explanation for an observation.",
        points: [
          ["Why it matters", "It generates new ideas in the Ideate phase and helps see problems differently in the Define phase. It is the engine of creativity in design thinking."],
          ["Peirce", "Abduction is the process of forming an explanatory hypothesis. It is the only logical operation that introduces a new idea."],
          ["Airbnb example", "Observation: users are not booking enough on Airbnb. Possible hypotheses: they do not trust the platform, the price is too high, they do not know what to expect, or they want an experience, not just a place to sleep. Best explanation after testing: they want an authentic local experience, which led to a redesign."],
        ],
      },
      {
        title: "Multidisciplinary teams",
        points: [
          ["Why it matters", "Complex problems need diverse perspectives. Diverse teams come up with 2x more innovative solutions (McKinsey). Companies with diverse teams see 35% higher financial results (McKinsey, 2020)."],
          ["How to apply", "Cross-functional teams (designers, engineers, marketers) that are gender- and ethnically diverse whenever possible, and co-creation with all stakeholders (users, customers, employees, management, suppliers) to select the best ideas."],
          ["Pitfalls", "Silos (teams work in isolation), too homogeneous teams (everyone thinks the same), hierarchy (seniority decides who matters)."],
        ],
      },
      {
        title: "Experimental mindset",
        intro: "Being willing to experiment, fail, and learn from it.",
        points: [
          ["Why it matters", "Innovation comes from learning by doing. Failure is learning. Companies with an experimental culture innovate 3x faster (Harvard Business Review)."],
          ["Smart, not reckless", "It is not about taking reckless risks, but about taking smart risks and learning from every attempt."],
          ["How to apply", "Prototyping (tangible versions of ideas, often low-fidelity such as paper sketches), A/B testing (compare two versions), lean experiments (test small, cheap versions before investing heavily)."],
          ["Pitfalls", "Fear of failure, too expensive experimentation (start small with low-fidelity prototypes), no learning (set clear learning goals for each experiment)."],
        ],
      },
      {
        title: "Applying design thinking to your own case",
        points: [
          ["The problem", "Find the real problem and its root cause with 5 Whys. Choose the problem: describe the observation that proves it is a problem, who it affects, existing solutions and why they are not sufficient."],
          ["The scope", "How big is the problem and who are the stakeholders? Create a stakeholder map and make assumptions about how you can make a difference."],
          ["The team", "Who is needed to solve the problem? Build a multidisciplinary team."],
          ["Empathy and framework", "Gather user insights, then follow Empathise > Define > Ideate > Prototype > Test. Plan how you will build empathy and define the scope before you start."],
          ["Avoid these mistakes", "Rushing to solution, ignoring users, no iteration, unclear problem, starting too big, no experimentation."],
        ],
      },
      {
        title: "Conclusion",
        points: [
          ["Design thinking", "User-centred, iterative, creativity-driven. It is not a checkbox."],
          ["Framework", "Flexible: empathise, define, ideate, prototype, test, and repeat."],
          ["Principles", "Human-centred, iterative, abductive reasoning, multidisciplinarity, experimental mindset."],
          ["Application", "Start small, learn fast, involve stakeholders, learn from failures, and iterate. A full project can take weeks to months; a Design Sprint takes 5 days."],
        ],
      },
    ],
    cards: [
      { q: "What is innovation?", a: "The process of bringing about new ideas, methods, products, services or solutions that have a significant positive impact and value." },
      { q: "What is Henry Chesbrough known for?", a: "Open innovation: innovation can draw on ideas from outside the organisation." },
      { q: "What are the four levels of the Danish design ladder?", a: "1. Non-design, 2. Design as form-giving, 3. Design as process, 4. Design as strategy." },
      { q: "What characterises level 4 (design as strategy) of the Danish design ladder?", a: "Designers work with owners and management to rethink the business concept completely or in part, focusing on the business vision and the company’s future role in the value chain." },
      { q: "What are the three phases of Herbert Simon’s decision-making model?", a: "Intelligence (observe reality, understand the problem, gather information), design (develop criteria and alternatives, identify uncontrollable events, specify relationships) and choice (logically evaluate the alternatives and develop recommended actions)." },
      { q: "What is design thinking?", a: "A human-centred approach to innovation that draws from the designer’s toolkit to integrate the needs of people, the possibilities of technology and the requirements for business success." },
      { q: "How can design thinking be understood as a body of knowledge?", a: "As a set of cognitive, strategic and practical procedures in the process of designing, and as knowledge about how people reason when engaging with design problems. It is also associated with innovation." },
      { q: "What is inductive reasoning?", a: "Deriving a general principle from a body of observations, e.g. “This swan is white, that swan is white, therefore all swans are white.”" },
      { q: "What is deductive reasoning?", a: "Drawing a true conclusion from a set of premises via logically valid steps, e.g. “All humans are mortal; Socrates is human; therefore Socrates is mortal.”" },
      { q: "What is abductive reasoning?", a: "A form of logical reasoning that generates new ideas by seeking the best explanation for an observation." },
      { q: "Name the four ways design thinking differs from other approaches.", a: "Problem solving (wicked problems), user-centred (empathy), iterative (trial and error with prototypes), abductive reasoning (imagining what might be, assertion-based attitude)." },
      { q: "What is a wicked problem?", a: "A problem that is difficult or impossible to solve because of incomplete, contradictory and changing requirements that are often difficult to recognise." },
      { q: "How does design thinking address wicked problems?", a: "It shifts the goal from finding a single “correct” solution to understanding their complexity, reducing risk and driving meaningful solutions." },
      { q: "What should you look at to understand wicked problems?", a: "Below the surface of events: patterns (which patterns shape society, e.g. e-commerce), structures (what facilitates change, e.g. broadband, trust, online payment) and mental models (what behaviours are changing)." },
      { q: "What are the misconceptions about design thinking?", a: "That only designers can apply it, that it saves time, that it guarantees success. In reality anyone can apply it, it increases the chances of success but does not guarantee it, and it takes time and iteration." },
      { q: "What are the five steps of design thinking?", a: "Empathise, Define, Ideate, Prototype, Test." },
      { q: "What is the goal and outcome of the Empathise step?", a: "Goal: understand the user’s context, experiences, feelings, thoughts and wants. Outcome: insights, observations and an empathy map." },
      { q: "What are the outcomes of the Define step?", a: "A “Point of View” (POV) statement that articulates the problem clearly, and a series of “How Might We” questions." },
      { q: "What is the goal of the Ideate step?", a: "To generate as many ideas as possible, without judging them, and end with an extensive list from which to choose solutions to build." },
      { q: "What is the purpose of prototyping?", a: "To make selected ideas tangible for discussion and testing. Low-fidelity prototypes (sketches) or clickable mock-ups are common." },
      { q: "Why is the order Empathise > Define > Ideate > Prototype > Test important?", a: "You cannot define a problem without understanding the user, you cannot generate good solutions without a clear problem, you can only prototype a clearly defined idea, and testing gives feedback on a tangible expression of your ideas." },
      { q: "What is the principle of design thinking as a process?", a: "It is an iterative, non-linear process that focuses on collaboration between designers and users, and brings solutions to life based on how real users think, feel and behave." },
      { q: "Why do products fail, according to CB Insights?", a: "80% of products that fail do so because they do not meet user needs." },
      { q: "What does the Segway example show?", a: "Technically brilliant, but it failed in the market because its makers did not understand what people really wanted: a practical solution for short distances." },
      { q: "What does human-centred design (HCD) mean?", a: "An approach where the needs, desires and experiences of the user are central to the design process." },
      { q: "What do companies that apply human-centred design achieve, according to Forrester?", a: "32% higher customer satisfaction." },
      { q: "What are the three ways to apply human-centred design?", a: "Empathy (understand the world through the user’s eyes), research (gather real insights, not assumptions) and co-creation (involve users in the design process)." },
      { q: "What are the pitfalls of human-centred design?", a: "Projecting your own beliefs, making assumptions about what the user wants, and superficial empathy (only listening to what users say)." },
      { q: "Why is iterating important?", a: "No perfect solution comes in one try. Complex problems need experimentation, and testing early shows quickly what works. Companies that test early bring products to market 2x faster (McKinsey)." },
      { q: "What is a Minimum Viable Product (MVP)?", a: "A version of a product with just enough features to test with users. You build it, measure results, and learn and adapt from feedback (Lean Startup approach)." },
      { q: "What are the pitfalls of an iterative process?", a: "Testing too late, no iteration (assuming the first solution is the best), and no learning (iterating without learning)." },
      { q: "Where is abductive reasoning used in the design thinking process?", a: "In the Ideate phase to generate new solutions based on insights, and in the Define phase to discover new insights and view problems differently." },
      { q: "What does the Airbnb example show about abductive reasoning?", a: "Observation: users are not booking enough. Possible explanations (hypotheses): lack of trust, high price, unclear expectations, or a desire for an experience. After testing, the best explanation was that users want an authentic local experience, which led to a redesign." },
      { q: "Why are multidisciplinary teams important?", a: "Complex problems need diverse perspectives. Diverse teams come up with 2x more innovative solutions (McKinsey), and companies with diverse teams see 35% higher financial results (McKinsey, 2020)." },
      { q: "What are the pitfalls of multidisciplinary teams?", a: "Silos (teams work in isolation), too homogeneous teams (everyone thinks the same) and hierarchy (seniority determines who matters)." },
      { q: "What is an experimental mindset?", a: "Innovation comes from learning by doing. Failure is learning, and every experiment teaches something new. It means taking smart risks, not reckless ones." },
      { q: "How much faster do companies with an experimental culture innovate?", a: "3x faster (Harvard Business Review)." },
      { q: "Name three ways to apply an experimental mindset.", a: "Prototyping (tangible versions of ideas), A/B testing (compare two versions of a solution), and lean experiments (test small, cheap versions before investing heavily)." },
      { q: "What are the pitfalls of an experimental mindset?", a: "Fear of failure, too expensive experimentation (start small with low-fidelity prototypes), and no learning (set clear learning goals for each experiment)." },
      { q: "What are the first three steps when applying design thinking to your own case?", a: "1. Define the real problem and root cause (5 Whys), 2. define the scope and stakeholders (stakeholder map), 3. assemble the team. Then gather empathy and follow the framework." },
      { q: "What are the common mistakes to avoid when applying design thinking?", a: "Rushing to a solution, ignoring users, no iteration, unclear problem, starting too big, and no experimentation." },
      { q: "What is a Design Sprint and how long does it take?", a: "A short, focused design thinking process that takes 5 days. A full design thinking project can range from weeks to months." },
      { q: "What is the Double Diamond?", a: "A model of the design process (British Design Council) with two diamonds. Each diamond first diverges (explores many options) and then converges (focuses on one). The first diamond explores and defines the problem; the second explores and delivers the solution." },
      { q: "What are the four phases of the Double Diamond?", a: "Discover, Define, Develop, Deliver. Discover and Define form the problem space; Develop and Deliver form the solution space." },
      { q: "What do “diverge” and “converge” mean in the Double Diamond?", a: "Diverge means exploring many options and possibilities. Converge means narrowing down to one clear problem or solution." },
      { q: "What are IDEO’s three phases of the design process?", a: "Inspiration, Ideation, Implementation." },
      { q: "What happens in the Inspiration phase (IDEO)?", a: "You understand the people and the problem and what motivates the search for a solution." },
      { q: "What happens in the Ideation phase (IDEO)?", a: "You generate, develop and test ideas." },
      { q: "What happens in the Implementation phase (IDEO)?", a: "You bring the best solution to market and plan how it will be adopted." },
      { q: "How to apply iterative processes?", a: "Lean Startup: build a Minimum Viable Product (MVP), measure the results, learn from feedback and adapt. Design thinking: create a prototype (not necessarily perfect), test it with real users, collect feedback and adapt based on it. Fail fast and learn: treat failure as a learning opportunity, not a defeat, and adapt." },
      { q: "How to apply multidisciplinarity?", a: "Cross-functional teams: combine designers, engineers and marketers, and create a gender- and ethnically diverse team whenever possible. Stakeholders: involve all stakeholders: users, customers, employees, management and suppliers. Co-creation: work together with users and other stakeholders to create and select the best ideas." },
      { q: "How is design thinking best described according to the conclusion?", a: "As a mindset (user-centred, iterative, creativity-driven), a flexible framework (empathise, define, ideate, prototype, test, and repeat), not a checkbox." },
    ],
  },
  {
    id: "bmi",
    title: "UNDERSTANDING BUSINESS MODEL INNOVATION FROM AN EXPLOIT PERSPECTIVE",
    subtitle: "Script 3 · Business model innovation, epicentres, patterns and the explore/exploit continuum",
    summary: [
      {
        title: "About this script",
        intro:
          "The script is based on Osterwalder et al. (2020), The Invincible Company. Learning outcomes: the importance of business model innovation, the difference between digitisation and digitalisation, common innovation myths, the exploration vs. exploitation framework, and patterns for business model innovation in the exploit phase.",
        points: [],
      },
      {
        title: "What business model innovation is",
        intro:
          "Business model innovation is the process of creating a new business model or redesigning an existing one to fundamentally change how an organisation creates, delivers and captures value. Innovation is about finding new ways to create and deliver value, from operational improvements to disruptive breakthroughs.",
        points: [],
      },
      {
        title: "Digitisation vs. digitalisation",
        points: [
          ["Digitisation", "Changing from analogue to digital form (Gartner). It takes an analogue process and converts it to digital without changing the process itself: “doing the same things more efficiently using digital tools.”"],
          ["Digitalisation / digital transformation", "Using digital technologies to change a business model and create new revenue and value-producing opportunities (Gartner): “doing new things or transforming the business by using digital technologies.”"],
          ["Chesbrough", "“The value of an idea or technology depends on its business model. There is no inherent value in technology per se.”"],
          ["CD vs. Spotify", "A CD digitises music: the customer buys and owns the medium and needs a player. Spotify digitalises music: millions of songs, playlists and suggestions based on behaviour. The user owns nothing but can listen as long as a subscription is paid."],
        ],
      },
      {
        title: "Three Horizons of Innovation",
        intro:
          "A strategic framework from McKinsey consultants Mehrdad Baghai, Stephen Coley and David White (1999, The Alchemy of Growth).",
        figures: ["threeHorizons"],
        points: [
          ["Horizon 1: The core", "Your current business: optimisation, efficiency improvements, incremental extensions. Time horizon: now to 12 months."],
          ["Horizon 2: Emerging growth", "New market segments or new product lines. Time horizon: 2–3 years."],
          ["Horizon 3: Future bets", "Early-stage ideas, experiments, research projects. No revenue yet, possibly no product yet. High uncertainty, potentially high return. Time horizon: 5–10 years."],
          ["Link to exploit/explore", "Operational innovation (exploit) takes place in Horizons 1 and 2. Explorational innovation (explore) takes place in Horizon 3."],
        ],
      },
      {
        title: "Exploration and exploitation",
        intro:
          "The explore vs. exploit concept originates from organisational theorist James G. March, “Exploration and Exploitation in Organisational Learning” (1991).",
        points: [
          ["Exploration (explore)", "Taking risks and experimenting. Discovering future products and unserved markets. Goal: long-term survival and breakthrough innovation."],
          ["Exploitation (exploit)", "Refining existing knowledge. Improving operational efficiency. Enhancing current products for existing customers. Goal: short-term profits and immediate value."],
        ],
      },
      {
        title: "Innovation myths",
        points: [
          ["Myth 1: The perfect idea", "Reality: there is no such thing as the perfect idea. Most innovations go through a series of pivots before they match user needs (Airbnb, Netflix). Organisations should run ongoing experiments (Eric Ries, The Lean Startup)."],
          ["Myth 2: Big bets lead to success", "Reality: examples of failed big bets include Apple’s Newton, Jonathan and iTunes Ping, and Google Glass, Google+ and Google Allo."],
          ["Myth 3: The creative act", "The belief that business is business: the skills to explore a new business and to manage an existing one are similar. Reality: they differ. Managing is about certainty, goal orientation and execution; exploring is about uncertainty and learning."],
          ["The Innovator’s Dilemma", "Christensen (1997): most companies will miss out on new innovations. A successful company with established products gets pushed aside unless managers know how and when to abandon traditional business practices."],
        ],
      },
      {
        title: "The ambidextrous organisation",
        points: [
          ["O’Reilly & Tushman (2004)", "Successful companies need to do two very different things at once: exploration and exploitation. They need to be “ambidextrous.”"],
          ["The Invincible Company", "Good at both exploitation and exploration."],
        ],
      },
      {
        title: "The explore/exploit continuum",
        figures: ["continuum"],
        table: {
          headers: ["", "Explore", "Exploit"],
          rows: [
            ["Focus", "Search and breakthrough", "Efficiency and growth"],
            ["Uncertainty", "High", "Low"],
            ["Financial philosophy", "Venture-capital style risk-taking, expecting few outsized winners", "Safe haven with steady returns and dividends"],
            ["Culture & process", "Iterative experimentation, embracing speed, failure, learning, and rapid adaptation", "Linear execution, embracing planning, predictability, and minimal failure"],
            ["People & skills", "Explorers who excel in uncertainty, are strong at pattern recognition, and can navigate between big picture and details", "Managers who are strong at organizing and planning and can design efficient processes to deliver on time and budget"],
          ],
        },
        points: [],
      },
      {
        title: "Tools of the Invincible Company",
        intro: "Three tools: the portfolio map, business model patterns and the culture map.",
        points: [
          ["Portfolio map", "Plots return against innovation risk (death and disruption risk). Exploration: search to apply new business model patterns. Exploitation: grow by shifting existing business model patterns. Ambidexterity: the ambidextrous organisation masters both."],
          ["Three types of innovation", "Transformative (explore): radically new business models outside the core, high uncertainty, positions the company for long-term growth. Example: AWS, born from internal needs. Sustaining (middle): builds on existing business models with new products, services, channels or expansions. Example: Kindle, which expanded book sales into e-readers. Efficiency (exploit): improves operations of the existing business without changing the model. Example: Amazon’s robotics in warehouses."],
        ],
      },
      {
        title: "Epicentres of change",
        points: [
          ["Frontstage", "Customer-driven: customer segments, customer relationships and channels connect the business to customers."],
          ["Backstage", "Resource-driven: the activities and resources needed, and the partners we work with."],
          ["Profit formula", "Finance-driven: how we generate revenue and how we buy resources."],
        ],
      },
      {
        title: "Business model innovation patterns",
        intro: "A pattern is a template for innovating a business model, based on what worked elsewhere.",
        points: [
          ["Shift pattern", "Transition from one business model to another. Big changes across multiple blocks. Example: physical to digital services."],
          ["Invent pattern", "Build a new business model from scratch. More disruptive, with a novel value proposition."],
        ],
      },
      {
        title: "Exploitation patterns (shift patterns)",
        points: [
          ["Backstage-driven shift", "From dedicated to multi-use; from asset-heavy to asset-light; from closed to open innovation."],
          ["Value proposition shift", "From product to service; from low-tech to high-tech; from sales to platform."],
          ["Frontstage-driven shift", "From niche to mass market; from B2B to B2(B2)C; from sales to platform."],
          ["Profit formula shift", "From high cost to low cost; from transactional to recurring revenue; from conventional to contrarian."],
        ],
      },
      {
        title: "Exploration patterns (invent patterns)",
        points: [
          ["Backstage-driven", "Resource castles, activity differentiators, scalers."],
          ["Frontstage-driven", "Market explorers, channel kings, gravity creators."],
          ["Profit formula", "Revenue differentiators, cost differentiators, margin masters."],
        ],
      },
      {
        title: "Airbnb and BattMobility case",
        points: [
          ["From asset-heavy to asset-light", "Airbnb does not invest in bricks (hotels). BattMobility does not invest in cars."],
          ["From sales to platform", "Airbnb provides a platform where owners can rent out and travellers can rent. BattMobility provides a platform where car owners can share their cars."],
          ["From conventional to contrarian", "Airbnb did not follow convention (hotels, marketing) but focused on the real need. BattMobility challenged the idea that one needs an owned car."],
        ],
      },
      {
        title: "Applying shift patterns to your case",
        points: [
          ["1. Look for inspiration", "Search for inspiring shifts in business models in other companies or industries."],
          ["2. Find similarities", "Identify the similarities and imagine what shift in the example would mean for your business model."],
          ["3. Apply shift", "Redesign your business model and conclude how this might create value, or not."],
        ],
      },
      {
        title: "Conclusion",
        points: [
          ["Epicentres of change", "Innovation starts frontstage, backstage, in the profit formula or in the value proposition."],
          ["Invent", "Builds a model from scratch."],
          ["Shift", "Makes an existing model more competitive."],
          ["Exploit", "Grows today’s model by shifting its patterns."],
          ["Explore", "Searches for the next model."],
          ["Digitalisation vs. digital transformation", "Per the script’s Q&A: “No. Digitising converts, digitalising changes processes. Transformation rethinks the business model itself.”"],
          ["Ambidexterity", "One company can explore and exploit at the same time, but the two need different metrics, horizons and cultures."],
        ],
      },
      {
        title: "Example exam questions (from the script)",
        points: [
          ["Definition", "Why are business models important for digital transformation? What is the difference between digitisation and digitalisation? What are the three types of innovation according to Clayton Christensen? Define what a business model pattern is."],
          ["Application", "What type of innovation is the assembly line, the original iPhone or the iPhone 14? Where would you situate it on the explore/exploit continuum, and why? Is it transformative, sustaining or efficiency?"],
          ["Comparison", "What is the difference between business model invent patterns and shift patterns? Describe a pattern (e.g. resource castle), give an example, and say whether it is used for exploration or exploitation and what its epicentre is."],
        ],
      },
    ],
    cards: [
      { q: "What is business model innovation?", a: "The process of creating a new business model or redesigning an existing one to fundamentally change how an organisation creates, delivers and captures value." },
      { q: "What is innovation about, according to the script?", a: "Finding new ways to create and deliver value. It can range from operational improvements to disruptive breakthroughs." },
      { q: "What is digitisation?", a: "Changing from analogue to digital form. It converts an analogue process to digital without changing the process itself (“doing the same things more efficiently using digital tools”, Gartner)." },
      { q: "What is digitalisation (digital transformation)?", a: "Using digital technologies to change a business model and create new revenue and value-producing opportunities (“doing new things or transforming the business by using digital technologies”, Gartner)." },
      { q: "What is the difference between digitisation and digitalisation?", a: "Digitisation converts an existing process to digital form. Digitalisation uses digital technologies to change the business model and create new value." },
      { q: "What does Henry Chesbrough say about the value of an idea or technology?", a: "The value of an idea or technology depends on its business model. There is no inherent value in technology per se." },
      { q: "What is the CD vs. Spotify example about?", a: "A CD digitises music: the customer buys and owns the medium and needs a player. Spotify digitalises music: access to millions of songs, playlists and suggestions, paid by subscription, with no ownership." },
      { q: "What are the three horizons of innovation?", a: "Horizon 1: the core (current business, now to 12 months). Horizon 2: emerging growth (new segments or product lines, 2–3 years). Horizon 3: future bets (early-stage experiments, 5–10 years, high uncertainty)." },
      { q: "Who introduced the Three Horizons framework and when?", a: "McKinsey consultants Mehrdad Baghai, Stephen Coley and David White, in their 1999 book The Alchemy of Growth." },
      { q: "Which horizons correspond to exploit and which to explore?", a: "Exploit (operational innovation) corresponds to Horizons 1 and 2. Explore (explorational innovation) corresponds to Horizon 3." },
      { q: "Who introduced the explore vs. exploit concept, and when?", a: "James G. March, in his 1991 paper “Exploration and Exploitation in Organisational Learning”." },
      { q: "What is exploration?", a: "Taking risks and experimenting, discovering future products and unserved markets. Goal: long-term survival and breakthrough innovation." },
      { q: "What is exploitation?", a: "Refining existing knowledge, improving operational efficiency and enhancing current products for existing customers. Goal: short-term profits and immediate value." },
      { q: "What is innovation myth #1, and what is the reality?", a: "Myth: the most important part of innovation is finding and executing the perfect idea. Reality: there is no such thing as the perfect idea. Most innovations go through a series of pivots before they match user needs (Airbnb, Netflix)." },
      { q: "What is innovation myth #2, and what is the reality?", a: "Myth: a small number of big bets will lead to a large return. Reality: big bets often fail (e.g. Apple’s Newton, Jonathan and iTunes Ping; Google Glass, Google+ and Google Allo)." },
      { q: "What is innovation myth #3, and what is the reality?", a: "Myth: “business is business”, i.e. the skills to explore a new business and to manage an existing one are similar. Reality: they are different. Managing means certainty and goal orientation; exploring means uncertainty and learning-driven work." },
      { q: "What is the Innovator’s Dilemma?", a: "Christensen (1997): successful companies with established products get pushed aside unless managers know how and when to abandon traditional business practices." },
      { q: "What is an ambidextrous organisation?", a: "An organisation that does exploration and exploitation at the same time (O’Reilly & Tushman, 2004)." },
      { q: "What does “The Invincible Company” say about exploration and exploitation?", a: "The invincible company is good at both exploitation and exploration." },
      { q: "What are the characteristics of the explore/exploit continuum?", a: "Exploration: high uncertainty, search and breakthrough, venture-capital-style risk-taking, iterative experimentation, explorers. Exploitation: low uncertainty, efficiency and growth, safe haven with steady returns, linear execution, managers." },
      { q: "What are the three tools of the Invincible Company?", a: "The portfolio map, business model patterns and the culture map." },
      { q: "What does the portfolio map show?", a: "Expected return against innovation risk (death and disruption risk)." },
      { q: "What are the three types of innovation according to Christensen?", a: "Transformative (explore), sustaining (middle) and efficiency (exploit)." },
      { q: "Give one example for each of Christensen’s three types of innovation.", a: "Transformative: AWS (Amazon Web Services), born from internal needs. Sustaining: Kindle, which expanded book sales into e-readers. Efficiency: Amazon’s robotics in warehouses." },
      { q: "How does the script classify the assembly line, the original iPhone and the iPhone 14?", a: "In the order given on the slide: assembly line = efficiency, original iPhone = transformative, iPhone 14 = sustaining." },
      { q: "What are the three epicentres of change?", a: "Frontstage (customer-driven), backstage (resource-driven) and profit formula (finance-driven)." },
      { q: "What is a business model pattern?", a: "A template for innovating a business model, based on what worked elsewhere." },
      { q: "What is the difference between invent and shift patterns?", a: "Shift pattern: transition from one business model to another, with big changes across multiple blocks (e.g. physical to digital services). Invent pattern: build a new business model from scratch, more disruptive, with a novel value proposition." },
      { q: "What are the backstage-driven exploitation shifts?", a: "From dedicated to multi-use, from asset-heavy to asset-light, and from closed to open innovation." },
      { q: "What are the value proposition shifts?", a: "From product to service, from low-tech to high-tech, and from sales to platform." },
      { q: "What are the frontstage-driven exploitation shifts?", a: "From niche to mass market, from B2B to B2(B2)C, and from sales to platform." },
      { q: "What are the profit formula shifts?", a: "From high cost to low cost, from transactional to recurring revenue, and from conventional to contrarian." },
      { q: "Which exploration patterns exist in the backstage, frontstage and profit formula?", a: "Backstage: resource castles, activity differentiators, scalers. Frontstage: market explorers, channel kings, gravity creators. Profit formula: revenue differentiators, cost differentiators, margin masters." },
      { q: "What does the Airbnb and BattMobility case show?", a: "Three shifts: from asset-heavy to asset-light (Airbnb and BattMobility invest in no bricks or cars), from sales to platform (owners rent out or share), and from conventional to contrarian (Airbnb focused on the real need, BattMobility challenged car ownership)." },
      { q: "Is digitalisation the same as digital transformation?", a: "According to the script’s Q&A: No. Digitising converts, digitalising changes processes, and transformation rethinks the business model itself." },
      { q: "Which epicentre would you shift first, and why?", a: "Pick the block where a shift creates the most value: frontstage, backstage, value proposition or profit formula." },
    ],
  },
];

const FIGURES = {
  doubleDiamond: (
    <figure className="my-4">
      <svg viewBox="0 0 520 250" className="w-full h-auto" role="img" aria-label="Double Diamond process model">
        <defs>
          <marker id="ddArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#0f172a" />
          </marker>
        </defs>
        <polygon points="30,110 150,30 270,110 150,190" fill="#cffafe" stroke="#0f172a" strokeWidth="2" />
        <polygon points="250,110 370,30 490,110 370,190" fill="#cffafe" stroke="#0f172a" strokeWidth="2" />
        <line x1="150" y1="110" x2="150" y2="110" />
        <text x="90" y="112" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Discover</text>
        <text x="210" y="112" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Define</text>
        <text x="310" y="112" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Develop</text>
        <text x="430" y="112" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Deliver</text>
        <text x="150" y="225" textAnchor="middle" fontSize="12" fill="#475569">Problem space</text>
        <text x="370" y="225" textAnchor="middle" fontSize="12" fill="#475569">Solution space</text>
        <text x="150" y="20" textAnchor="middle" fontSize="11" fill="#06b6d4">diverge → converge</text>
        <text x="370" y="20" textAnchor="middle" fontSize="11" fill="#06b6d4">diverge → converge</text>
      </svg>
      <figcaption className="text-xs text-slate-500 mt-1">Double Diamond (British Design Council): two cycles of diverging and converging.</figcaption>
    </figure>
  ),
  ideo: (
    <figure className="my-4">
      <svg viewBox="0 0 520 130" className="w-full h-auto" role="img" aria-label="IDEO Inspiration, Ideation, Implementation">
        <defs>
          <marker id="ideoArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#0f172a" />
          </marker>
        </defs>
        {[
          [10, "Inspiration"],
          [190, "Ideation"],
          [370, "Implementation"],
        ].map(([x, label], i) => (
          <g key={label}>
            <rect x={x} y="30" width="140" height="60" rx="12" fill={i === 1 ? "#0f172a" : "#e0f2fe"} stroke="#0f172a" strokeWidth="2" />
            <text x={x + 70} y="66" textAnchor="middle" fontSize="14" fontWeight="600" fill={i === 1 ? "#ffffff" : "#0f172a"}>
              {label}
            </text>
          </g>
        ))}
        <line x1="152" y1="60" x2="186" y2="60" stroke="#0f172a" strokeWidth="2" markerEnd="url(#ideoArrow)" />
        <line x1="334" y1="60" x2="366" y2="60" stroke="#0f172a" strokeWidth="2" markerEnd="url(#ideoArrow)" />
        <text x="70" y="115" textAnchor="middle" fontSize="11" fill="#475569">Understand the problem</text>
        <text x="260" y="115" textAnchor="middle" fontSize="11" fill="#475569">Generate and test ideas</text>
        <text x="440" y="115" textAnchor="middle" fontSize="11" fill="#475569">Bring to market</text>
      </svg>
      <figcaption className="text-xs text-slate-500 mt-1">IDEO’s three phases of the design process.</figcaption>
    </figure>
  ),
  fiveSteps: (
    <figure className="my-4">
      <svg viewBox="0 0 600 170" className="w-full h-auto" role="img" aria-label="Five steps of design thinking with feedback loop">
        <defs>
          <marker id="stepArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#0f172a" />
          </marker>
        </defs>
        {["Empathise", "Define", "Ideate", "Prototype", "Test"].map((label, i) => {
          const x = 10 + i * 120;
          return (
            <g key={label}>
              <rect x={x} y="20" width="100" height="52" rx="10" fill={i === 1 ? "#0f172a" : "#e0f2fe"} stroke="#0f172a" strokeWidth="2" />
              <text x={x + 50} y="51" textAnchor="middle" fontSize="13" fontWeight="600" fill={i === 1 ? "#ffffff" : "#0f172a"}>
                {label}
              </text>
              {i < 4 && <line x1={x + 100} y1="46" x2={x + 118} y2="46" stroke="#0f172a" strokeWidth="2" markerEnd="url(#stepArrow)" />}
            </g>
          );
        })}
        <path d="M530,74 L530,140 L60,140 L60,78" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#stepArrow)" />
        <text x="295" y="160" textAnchor="middle" fontSize="12" fill="#475569">Iterate: go back when you learn something new</text>
      </svg>
      <figcaption className="text-xs text-slate-500 mt-1">The five steps of design thinking, with the iteration loop.</figcaption>
    </figure>
  ),
  iterativeLoop: (
    <figure className="my-4">
      <svg viewBox="0 0 520 230" className="w-full h-auto" role="img" aria-label="Iterative loop: build, test, learn, adapt">
        <defs>
          <marker id="loopArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="#06b6d4" />
          </marker>
        </defs>
        <circle cx="260" cy="115" r="75" fill="none" stroke="#06b6d4" strokeWidth="3" strokeDasharray="2 0" />
        {[
          [260, 40, "Prototype / Build"],
          [335, 115, "Test with users"],
          [260, 190, "Measure & learn"],
          [185, 115, "Adapt"],
        ].map(([cx, cy, label]) => (
          <g key={label}>
            <circle cx={cx} cy={cy} r="8" fill="#0f172a" />
          </g>
        ))}
        <text x="260" y="22" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Prototype / Build</text>
        <text x="425" y="120" textAnchor="start" fontSize="13" fontWeight="600" fill="#0f172a">Test with users</text>
        <text x="260" y="222" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">Measure &amp; learn</text>
        <text x="95" y="120" textAnchor="end" fontSize="13" fontWeight="600" fill="#0f172a">Adapt</text>
        <text x="260" y="118" textAnchor="middle" fontSize="12" fill="#475569">repeat</text>
      </svg>
      <figcaption className="text-xs text-slate-500 mt-1">The iterative cycle: prototype, test, learn, adapt, and repeat.</figcaption>
    </figure>
  ),
  threeHorizons: (
    <figure className="my-4">
      <svg viewBox="0 0 560 220" className="w-full h-auto" role="img" aria-label="Three Horizons of Innovation">
        {[
          [0, "Horizon 1: The core", "Now to 12 months", "Exploit", "#e0f2fe", "#0f172a"],
          [1, "Horizon 2: Emerging growth", "2–3 years", "Exploit", "#bae6fd", "#0f172a"],
          [2, "Horizon 3: Future bets", "5–10 years", "Explore", "#0f172a", "#ffffff"],
        ].map(([i, title, time, mode, fill, textFill]) => {
          const y = 20 + i * 62;
          const x = 20 + i * 40;
          const w = 520 - i * 80;
          return (
            <g key={title}>
              <rect x={x} y={y} width={w} height="50" rx="10" fill={fill} stroke="#0f172a" strokeWidth="1.5" />
              <text x={x + 14} y={y + 22} fontSize="14" fontWeight="600" fill={textFill}>{title}</text>
              <text x={x + 14} y={y + 40} fontSize="12" fill={textFill}>{time}</text>
              <text x={x + w - 14} y={y + 31} textAnchor="end" fontSize="12" fontWeight="600" fill={textFill}>{mode}</text>
            </g>
          );
        })}
      </svg>
      <figcaption className="text-xs text-slate-500 mt-1">Three Horizons of Innovation (McKinsey, 1999). Horizons 1 and 2 map to exploit; Horizon 3 maps to explore.</figcaption>
    </figure>
  ),
  continuum: (
    <figure className="my-4">
      <svg viewBox="0 0 560 120" className="w-full h-auto" role="img" aria-label="Explore to exploit continuum">
        <defs>
          <linearGradient id="contGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="20" y="40" width="520" height="28" rx="14" fill="url(#contGrad)" />
        <text x="20" y="28" fontSize="13" fontWeight="600" fill="#0f172a">EXPLORE</text>
        <text x="540" y="28" textAnchor="end" fontSize="13" fontWeight="600" fill="#0f172a">EXPLOIT</text>
        <text x="20" y="92" fontSize="12" fill="#475569">Search and breakthrough · high uncertainty · transformative</text>
        <text x="540" y="92" textAnchor="end" fontSize="12" fill="#475569">Efficiency and growth · low uncertainty · efficiency</text>
        <text x="280" y="58" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">Sustaining (middle)</text>
      </svg>
      <figcaption className="text-xs text-slate-500 mt-1">The explore/exploit continuum: the ambidextrous organisation masters both ends.</figcaption>
    </figure>
  ),
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function SummaryView({ chapter }) {
  return (
    <div className="space-y-10">
      {chapter.summary.map((sec, i) => (
        <section key={i} aria-labelledby={`sec-${i}`}>
          <h3 id={`sec-${i}`} className="text-xl font-semibold text-slate-900 mb-2">
            <span className="text-cyan-600 mr-2">{String(i + 1).padStart(2, "0")}</span>
            {sec.title}
          </h3>
          {sec.intro && <p className="text-slate-700 mb-3 leading-relaxed">{sec.intro}</p>}
          {sec.table && (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    {sec.table.headers.map((h, k) => (
                      <th key={k} className="text-left p-2 border-b-2 border-slate-900 text-slate-900">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.table.rows.map((r, i) => (
                    <tr key={i} className="align-top border-b border-slate-200">
                      {r.map((c, j) => (
                        <td key={j} className={`p-2 ${j === 0 ? "font-semibold text-pink-600" : "text-slate-700"}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {sec.figures && sec.figures.map((f) => <React.Fragment key={f}>{FIGURES[f]}</React.Fragment>)}
          {sec.points.length > 0 && (
            <ul className="space-y-2">
              {sec.points.map(([label, text], j) => (
                <li key={j} className="border-l-2 border-cyan-400 pl-4 py-1 text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">{label}:</strong> {text}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

function Flashcards({ chapter }) {
  const total = chapter.cards.length;
  const [order, setOrder] = React.useState(() => chapter.cards.map((_, i) => i));
  const [pos, setPos] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [status, setStatus] = React.useState({}); // index -> "known" | "learning"
  const [filter, setFilter] = React.useState("all"); // all | learning | unknown

  const deck = React.useMemo(() => {
    if (filter === "all") return order;
    return order.filter((idx) =>
      filter === "learning" ? status[idx] === "learning" : status[idx] === undefined
    );
  }, [order, filter, status]);

  const safePos = deck.length ? Math.min(pos, deck.length - 1) : 0;
  const card = deck.length ? chapter.cards[deck[safePos]] : null;
  const knownCount = Object.values(status).filter((s) => s === "known").length;

  const go = React.useCallback(
    (delta) => {
      if (!deck.length) return;
      setFlipped(false);
      setPos((p) => Math.min(Math.max(p + delta, 0), deck.length - 1));
    },
    [deck.length]
  );

  const mark = React.useCallback(
    (value) => {
      if (!card) return;
      const idx = deck[safePos];
      setStatus((s) => ({ ...s, [idx]: value }));
      setFlipped(false);
      setPos((p) => (p < deck.length - 1 ? p + 1 : p));
    },
    [card, deck, safePos]
  );

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "1") mark("known");
      else if (e.key === "2") mark("learning");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, mark]);

  const reshuffle = () => {
    setOrder(shuffle(chapter.cards.map((_, i) => i)));
    setPos(0);
    setFlipped(false);
  };

  const reset = () => {
    setStatus({});
    setOrder(chapter.cards.map((_, i) => i));
    setPos(0);
    setFlipped(false);
    setFilter("all");
  };

  const changeFilter = (f) => {
    setFilter(f);
    setPos(0);
    setFlipped(false);
  };

  const pct = Math.round((knownCount / total) * 100);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-sm text-slate-600">
        <span>
          Known: <strong className="text-slate-900">{knownCount}</strong> / {total} ({pct}%)
        </span>
        <div className="flex gap-2" role="group" aria-label="Deck filter">
          {[
            ["all", "All"],
            ["learning", "Still learning"],
            ["unknown", "Not yet rated"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => changeFilter(key)}
              aria-pressed={filter === key}
              className={`px-3 py-1 rounded-full border text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                filter === key ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-6" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-cyan-500 transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>

      {!card ? (
        <div className="border border-dashed border-slate-300 rounded-2xl p-10 text-center text-slate-600">
          No cards in this filter. Try "All" or reset your progress.
        </div>
      ) : (
        <>
          <p className="text-center text-sm text-slate-500 mb-3">
            Card {safePos + 1} of {deck.length}
            {status[deck[safePos]] === "known" && <span className="ml-2 text-emerald-600">✓ known</span>}
            {status[deck[safePos]] === "learning" && <span className="ml-2 text-amber-600">↺ still learning</span>}
          </p>

          <button
            onClick={() => setFlipped((f) => !f)}
            aria-label={flipped ? "Show question" : "Show answer"}
            className="card-scene w-full h-72 sm:h-80 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 rounded-2xl"
          >
            <div className={`card-inner ${flipped ? "is-flipped" : ""} relative w-full h-full`}>
              <div className="card-face absolute inset-0 rounded-2xl bg-white border border-slate-200 shadow-md p-8 flex flex-col">
                <span className="text-xs uppercase tracking-wider text-cyan-600 font-semibold">Question</span>
                <div className="flex-1 flex items-center justify-center text-center">
                  <p className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug">{card.q}</p>
                </div>
                <span className="text-xs text-slate-400 text-center">Click or press Space to reveal</span>
              </div>
              <div className="card-face card-back absolute inset-0 rounded-2xl bg-slate-900 shadow-md p-8 flex flex-col text-white">
                <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">Answer</span>
                <div className="flex-1 flex items-center justify-center text-center overflow-y-auto">
                  <p className="text-base sm:text-lg leading-relaxed">{card.a}</p>
                </div>
              </div>
            </div>
          </button>

          <div className="flex items-center justify-between mt-6 gap-2">
            <button
              onClick={() => go(-1)}
              disabled={safePos === 0}
              className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 disabled:opacity-40 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              ← Previous
            </button>
            <button
              onClick={() => mark("learning")}
              className="px-4 py-2 rounded-lg bg-amber-100 text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Still learning (2)
            </button>
            <button
              onClick={() => mark("known")}
              className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              I know it (1)
            </button>
            <button
              onClick={() => go(1)}
              disabled={safePos >= deck.length - 1}
              className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 disabled:opacity-40 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              Next →
            </button>
          </div>
        </>
      )}

      <div className="flex justify-center gap-3 mt-8">
        <button onClick={reshuffle} className="px-4 py-2 text-sm rounded-lg border border-slate-300 bg-white hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
          Shuffle
        </button>
        <button onClick={reset} className="px-4 py-2 text-sm rounded-lg border border-slate-300 bg-white hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
          Reset progress
        </button>
      </div>
      <p className="text-center text-xs text-slate-400 mt-4">
        Keyboard: Space = flip · ← → = navigate · 1 = know it · 2 = still learning
      </p>
    </div>
  );
}

export default function App() {
  const [chapterIdx, setChapterIdx] = React.useState(0);
  const [mode, setMode] = React.useState("summary");
  const chapter = CHAPTERS[chapterIdx];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <style>{`
        .card-scene { perspective: 1200px; }
        .card-inner { transition: transform 0.5s ease; transform-style: preserve-3d; }
        .card-inner.is-flipped { transform: rotateY(180deg); }
        .card-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .card-back { transform: rotateY(180deg); }
        @media (prefers-reduced-motion: reduce) {
          .card-inner { transition: none; }
        }
      `}</style>

      <header className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-cyan-300 text-sm font-semibold tracking-wide uppercase">Business and Innovation in Digital Field</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-1">{chapter.title}</h1>
          <p className="text-slate-300 mt-1">{chapter.subtitle}</p>
        </div>
      </header>

      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2" role="tablist" aria-label="Chapters">
            {CHAPTERS.map((c, i) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={i === chapterIdx}
                onClick={() => setChapterIdx(i)}
                className={`px-3 py-1.5 text-sm rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                  i === chapterIdx ? "bg-cyan-500 text-slate-900 font-semibold" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Chapter {i + 1}
              </button>
            ))}
          </div>
          <div className="flex gap-2" role="tablist" aria-label="View">
            {[
              ["summary", "Summary"],
              ["cards", "Flashcards"],
            ].map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={mode === key}
                onClick={() => setMode(key)}
                className={`px-4 py-1.5 text-sm rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                  mode === key ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {mode === "summary" ? (
          <SummaryView chapter={chapter} />
        ) : (
          <Flashcards key={chapter.id} chapter={chapter} />
        )}
      </main>
    </div>
  );
}
