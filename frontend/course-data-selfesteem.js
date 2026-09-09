/* ============================================================
   AfyaMind — Course Data: Self-Esteem & Identity
   Load this BEFORE course-engine.js
   ============================================================ */

const COURSE_ID = 'self-esteem-identity-v1';
const COURSE_TITLE = 'Self-Esteem & Identity';

const COURSE = {
  title: COURSE_TITLE,
  audience: 'General Adults',
  format: 'Self-paced modules',
  duration: '45–60 min total',
  modules: [
    {
      id: 'm1',
      icon: '🪞',
      title: 'Understanding Self-Esteem',
      subtitle: 'Psychoeducation',
      tagline: 'Before you can build healthier self-esteem, you need to understand what it actually is — and why most of what you\u2019ve been told about it doesn\u2019t work.',
      lessons: [
        {
          id: 'l1-1', title: 'What Is Self-Esteem?', time: '4 min',
          body: `
            <p>If you've ever been told to "just believe in yourself" — you already know how hollow that advice feels when neither comes naturally. The problem isn't that the advice is wrong in principle. It's that it skips entirely over the question of <em>how</em>, and treats self-esteem as a switch you decide to flip rather than something with real roots and a real process of change.</p>
            <p>Self-esteem is your overall sense of your own worth and value as a person. It's not confidence — confidence is task-specific (you can feel confident at your job while feeling fundamentally worthless as a person). Self-esteem is deeper: the baseline answer your mind carries to "am I someone who matters? Am I fundamentally okay?" That baseline shapes how you relate to others, what you believe you deserve, how you respond to failure, and how much space you allow yourself to take up.</p>
            <p><strong>What self-esteem is not:</strong> it's not arrogance — genuine self-esteem doesn't require comparison or ranking. It's not constant positivity — healthy self-esteem means criticism and failure don't shatter your fundamental sense of worth, not that you feel great all the time. And it's not something you either have or don't — it exists on a spectrum and fluctuates across situations and time.</p>
            <p>Self-esteem isn't a belief you adopt through decision. It's a felt sense — experienced in the body and nervous system as much as the mind. What you <em>can</em> do — and what this course is built around — is gradually shift the conditions that generate your sense of self-worth: the thoughts you practice, the evidence you pay attention to, the values you build identity around, the standards you set for how you're treated.</p>`,
          takeaway: "Self-esteem is your baseline sense of your own worth — deeper than confidence, more pervasive than mood. It's built gradually through shifting the conditions that shape how you see and relate to yourself."
        },
        {
          id: 'l1-2', title: 'Where Self-Esteem Comes From', time: '5 min',
          body: `
            <p>Your sense of self-worth didn't arrive from nowhere. It was built over years, through experiences and messages, long before you were old enough to critically evaluate any of it. Understanding where it came from doesn't mean blaming your past — it means understanding the architecture of something constructed without your conscious input, so you can finally work with it intentionally.</p>
            <p>Children absorb early experiences as truth. Consistent warmth and attunement teaches "I matter, I am enough." Consistent criticism or conditional love teaches "I am not enough, I have to earn my place." These early messages don't arrive as stated beliefs — they become felt truths, an invisible operating system that feels like simple reality rather than a conclusion drawn from evidence.</p>
            <p><strong>Key influences:</strong> parents and caregivers (through consistency, whether love felt conditional); siblings and family roles (being cast as "the difficult one" can persist decades); peers and social experiences (belonging and rejection feel survival-critical in school); cultural and societal messages (whose bodies and identities get valued); and significant experiences like trauma or loss, especially when interpreted as personal inadequacy.</p>
            <p>Self-esteem feels fixed because these beliefs were formed early and repeatedly reinforced — and because they're self-reinforcing: low self-esteem generates behaviors that produce experiences confirming the low self-esteem. This is why simply being told you're worthy doesn't change how you feel. The felt sense changes through sustained, repeated new experience — not through deciding to feel differently. That's slow work, but it's exactly what this course is built to support.</p>`,
          takeaway: "Self-esteem was shaped by early experiences and messages absorbed before critical thinking was available. It feels fixed because it operates as felt truth — but it changes through sustained new experience."
        },
        {
          id: 'l1-3', title: 'The Self-Esteem Trap: High, Low, and Contingent Worth', time: '5 min',
          body: `
            <p>Most conversations about self-esteem treat it as a simple scale — low to high, with the goal being as high as possible. This picture misses something important: it explains why some people with apparently high self-esteem still feel fundamentally insecure, and why chasing high self-esteem can itself become part of the problem. The missing piece is <strong>contingent self-worth</strong>.</p>
            <p><strong>Low self-esteem</strong> produces a recognizable pattern: difficulty accepting compliments, hypersensitivity to criticism, people-pleasing, avoidance of risk (failure would confirm the negative self-view), and unfavorable comparison with others regardless of actual evidence.</p>
            <p><strong>The problem with chasing high self-esteem:</strong> research by psychologist Jennifer Crocker found that actively pursuing high self-esteem — trying to feel good, achieve, be validated — can undermine wellbeing rather than support it. This is because it tends to be fragile: it depends on things going well. When conditions aren't met, it collapses, and the person is left with failure <em>plus</em> the devastation of a self-concept built on things going right.</p>
            <p><strong>Contingent self-worth</strong> says: "I am worthy if I am successful / approved of / attractive / needed." It looks like high self-esteem in good conditions, but the moment conditions shift — failure, rejection, a role change — the self-worth goes with it, because it was never actually stable. Many high-achieving people operate this way, which is why success can coexist with a persistent private sense of inadequacy.</p>
            <p>The alternative is <strong>unconditional self-worth</strong> — a stable foundation that lets you acknowledge flaws without concluding you're fundamentally flawed, experience failure without it becoming identity, and receive criticism without being shattered. That's what this course is building toward — not the performance of high self-esteem, but a quieter, more durable relationship with yourself.</p>`,
          takeaway: "The goal isn't high self-esteem — it's stable, unconditional self-worth that doesn't rise and fall with performance or approval."
        }
      ],
      capstone: { type: 'reflection', id: 'm1-reflect', title: 'Where Did My View of Myself Come From?', prompts: [
        'What messages — spoken or unspoken — did you receive about your worth as a child? What were you praised for, and criticized for?',
        'Was love and approval something that felt unconditional — or did it feel like something you had to earn?',
        'Honestly, where do you sit right now — is your self-esteem generally low, generally stable, or does it fluctuate depending on circumstances?',
        '"I feel good about myself when ________________." "I feel worthless or inadequate when ________________." (These completions are your contingencies — the conditions your self-worth currently rests on.)',
        '"The story I\u2019ve been telling myself about who I am is ________________."'
      ], note: "Some of these reach into early experiences — go gently, and only as far as feels right today." }
    },
    {
      id: 'm2',
      icon: '🗣️',
      title: 'The Inner Critic',
      subtitle: 'Self-awareness',
      tagline: "There is a voice that knows exactly where you're most vulnerable. This module is about finally understanding where it came from — and how to stop letting it run the show.",
      lessons: [
        {
          id: 'l2-1', title: 'What Is the Inner Critic and Where Did It Come From?', time: '5 min',
          body: `
            <p>Almost everyone has it — that sharp, certain voice that narrates your failures and delivers verdicts with an authority that feels completely justified. Most people experience it as simply "thinking," honest self-assessment. It isn't. The inner critic is a psychological structure, built from absorbed experiences and learned survival strategies, running on autopilot — often for decades.</p>
            <p><strong>Internalized external voices</strong> — the critical parent, the teacher who made an example of you, the peer group that excluded you. Over time these get absorbed and become internal, running long after the original sources have left your life. Their voice has learned to sound exactly like you.</p>
            <p><strong>A survival strategy that outlived its usefulness</strong> — for many people the inner critic originally protected: criticizing yourself first, harshly, reduced the pain of external criticism. This was intelligent adaptation to difficult circumstances. The problem is it doesn't update when circumstances change — the protection becomes the prison.</p>
            <p><strong>Perfectionism and conditional worth</strong> — when love and safety depended on performance, the inner critic becomes the internal enforcer, making sure you never fall short of the standard that kept you safe.</p>
            <p>The inner critic is persuasive because it speaks in first person — not "that external voice thinks you're inadequate" but "I am inadequate." It's also selectively accurate: it finds real evidence, real mistakes. The distortion isn't in making things up — it's in treating evidence of human imperfection as proof of fundamental unworthiness while filtering out everything contradictory. A prosecutor who only calls witnesses for the prosecution isn't being honest — and that's exactly what the inner critic does, with complete conviction.</p>`,
          takeaway: 'The inner critic is a learned psychological structure — not an honest self-assessment. Understanding its origins separates it from your actual identity.'
        },
        {
          id: 'l2-2', title: 'How the Inner Critic Operates', time: '5 min',
          body: `
            <p>The inner critic is remarkably consistent — and that consistency is what makes it identifiable once you know what to look for.</p>
            <p><strong>Its language:</strong> absolute words — always, never, everyone, completely, worthless. Identity statements — not "I made a mistake" but "I am a failure"; not "I said something awkward" but "I am socially incompetent." Comparison language — "everyone else has their life together." And "should" language — "I should be further along by now," creating a permanent gap it then criticizes you for.</p>
            <p><strong>Its timing:</strong> loudest after perceived failure or mistakes; during comparison opportunities (social media, professional environments); when attempting something new (preemptively criticizing so you don't try, or are already braced); during moments of visibility; and — for people whose worth is contingent on productivity — when resting.</p>
            <p><strong>Its triggers</strong> tend to be personal: receiving feedback, making mistakes in front of others, feeling misunderstood, comparing yourself to peers, or even receiving compliments — which the inner critic rushes to discount.</p>
            <p>Identifying your personal triggers is the beginning of anticipating rather than being ambushed by its attacks.</p>`,
          takeaway: 'The inner critic has recognizable language, timing, and triggers. Learning to identify these in real time transforms it from an invisible authority into something you can name and examine.'
        },
        {
          id: 'l2-3', title: 'Inner Critic vs. Genuine Self-Reflection', time: '4 min',
          body: `
            <p>A common and legitimate fear: "what if the inner critic is right? What if I actually am failing?" Here's the distinction that matters — inner critic attacks and genuine self-reflection can be reliably told apart.</p>
            <p><strong>Genuine self-reflection</strong> is specific rather than global ("I handled that conversation poorly — I got defensive"), proportionate to what happened, oriented toward learning ("what would I do differently?"), delivered with a neutral or compassionate tone, and it concludes — it reaches understanding and stops.</p>
            <p><strong>The inner critic</strong> is global rather than specific (a mistake becomes evidence of permanent inadequacy), disproportionate (a minor awkwardness becomes mortifying), circular rather than progressive (it loops, doesn't move toward learning), contemptuous in tone, and it doesn't conclude — it ruminates, finding new angles, refusing to release.</p>
            <p>A practical test: <em>"Is this helping me understand something and move forward — or is it just hurting me?"</em> If it's genuine insight in a tone you'd accept from someone who cares about you, engage with it. If it's attacking your fundamental worth, looping without resolution, delivered with contempt — that's the inner critic, and it deserves curious examination, not automatic belief.</p>`,
          takeaway: 'Genuine self-reflection is specific, proportionate, and concludes. The inner critic is global, disproportionate, and endless. Telling them apart preserves honest self-assessment while removing the critic\u2019s false authority.'
        }
      ],
      capstone: { type: 'reflection', id: 'm2-innercritic', title: 'Inner Critic Mapping Worksheet', prompts: [
        'Think of a recent moment when your inner critic was particularly loud. Write down what it said — as close to the actual words as you can.',
        'Look at what you wrote: is the language absolute (always, never, worthless)? Is it an identity statement ("I am..." rather than "I did...")? Is it comparative? Does it contain "should"?',
        'Whose voice does this sound like — in tone, in standards, in what it focuses on? (You don\u2019t have to answer fully today. Sometimes it takes time to recognize.)',
        'From Lesson 2.2 — which trigger categories resonate most for you personally?',
        'Now write two responses to that same incident: the inner critic\u2019s version (harsh, global, absolute), and a genuine self-reflection version (specific, proportionate, compassionate in tone). Notice the difference — not just in content but in how each feels in your body.',
        '"The thing my inner critic attacks most consistently is ________________." That answer is what this course will focus on most for you.'
      ]}
    },
    {
      id: 'm3',
      icon: '💛',
      title: 'Rebuilding Your Relationship With Yourself',
      subtitle: 'Core work',
      tagline: 'The relationship you have with yourself is the longest one of your life. This module is about making it one worth having.',
      lessons: [
        {
          id: 'l3-1', title: 'From Self-Criticism to Self-Compassion', time: '5 min',
          body: `
            <p>If you've related to yourself primarily through criticism, genuine compassion can feel foreign, even wrong. Many people carry a quiet conviction that self-compassion is self-indulgence — that the inner critic, however harsh, is what keeps them accountable. This conviction is understandable and not supported by evidence.</p>
            <p>Research consistently shows people who relate to themselves with compassion are more motivated after failure, more willing to take responsibility for mistakes, and more resilient under pressure than people who rely on self-criticism. The inner critic doesn't make you better — it keeps you contracted, defended, exhausted. Self-compassion creates the internal safety from which genuine change becomes possible.</p>
            <p>The shift is a practice, not a single decision: <strong>noticing the attack before responding</strong> ("the inner critic is attacking right now" rather than "I am worthless right now"); <strong>acknowledging the pain honestly</strong> — "this is hard," without minimization or dramatization; <strong>bringing warmth rather than judgment</strong> — asking "what would I say to someone I love going through exactly this?"; and <strong>recognizing common humanity</strong> — struggle and self-doubt are among the most universal human experiences. You are not uniquely broken. You are human, in very good company.</p>
            <p>Self-compassion is hardest to access at exactly the moments it's most needed. This is why it's a practice — the more consistently you practice it in small, everyday moments, the more available it becomes in the harder ones. Start with the next small criticism that arrives, and meet it with just a little more kindness than usual.</p>`,
          takeaway: "Self-compassion isn't self-indulgence — it's the internal condition that makes genuine growth possible."
        },
        {
          id: 'l3-2', title: 'Values Clarification: Building Identity on What Matters', time: '5 min',
          body: `
            <p>Low self-esteem leaves identity feeling unmoored — dependent on shifting things like achievement or approval. When those go well, you feel okay; when they don't, the ground disappears. Values clarification anchors identity in what you genuinely care about instead — things that belong entirely to you regardless of outcomes.</p>
            <p>Values are not goals (destinations you arrive at) and not "should" statements (what you think you ought to care about). They're directions — ways of engaging with life that stay relevant regardless of where you currently are. Common examples: honesty, creativity, connection, courage, growth, kindness, integrity.</p>
            <p>When identity rests on values rather than outcomes: <strong>failure stops being identity-threatening</strong> (a failure is information, not devastation, if you acted in alignment with growth); <strong>external validation becomes less necessary</strong> (you have an internal reference point); <strong>decisions become clearer</strong> (values give you a compass); and <strong>a consistent sense of self survives transitions</strong> that would otherwise shatter self-concept.</p>
            <p>To find your values, ask: when have you felt most alive and engaged — and what about it mattered? What makes you genuinely angry when you see it violated in the world? Who do you most admire, and what specifically? The answers aren't always tidy — values clarification is often gradual recognition rather than sudden discovery.</p>`,
          takeaway: "Values clarification builds self-esteem by anchoring identity in what genuinely matters to you rather than in outcomes or approval."
        },
        {
          id: 'l3-3', title: 'The Evidence Log', time: '4 min',
          body: `
            <p>The inner critic is a relentless collector of evidence against you — every failure filed away and instantly retrievable. What it doesn't do is collect evidence on the other side: the things you've handled well, the moments of courage or kindness that happened and were immediately dismissed.</p>
            <p>The evidence log is a deliberate corrective — a running record that tells a more complete story than the inner critic's prosecution file. Keep the bar for entry genuinely low. Worth logging: things you did well, however small; how you showed up for others; qualities others have reflected back to you (compliments are data, not just politeness); how you handled difficulty, even imperfectly; values lived, even when hard; and the specific things that make you yourself.</p>
            <p>Keep it somewhere accessible and add to it regularly, even briefly. The practice of logging trains your attention to notice what the inner critic filters out — not through forced positivity but through genuine balance. When the critic is loud, return to the log — not to argue with it, but to remember the evidence is more complete than its version.</p>
            <p>Most people find the log genuinely uncomfortable at first — entries feel like bragging. That resistance is the inner critic protecting its evidence monopoly. Notice the resistance. Add the entry anyway. A fair trial requires both sides to present.</p>`,
          takeaway: "The evidence log deliberately builds the defense's case — not through false positivity, but fair, complete record keeping that includes what the inner critic filters out."
        }
      ],
      capstone: { type: 'guidedsession', id: 'm3-session', title: 'Guided Self-Compassion Practice',
        note: 'Use this whenever the inner critic is loudest — after a mistake, during self-doubt, or as a regular practice of building the self-compassion muscle.',
        steps: [
          { label: 'Arrive', seconds: 10, text: "Find a comfortable position and allow yourself to arrive here fully. You don\u2019t need to be in a particular mood for this. You don\u2019t need to feel ready. You just need to be here." },
          { label: 'Breathe', seconds: 8, text: "Take one slow breath in. And let it go completely." },
          { label: 'Bring it to mind', seconds: 12, text: "Bring to mind something you've been criticizing yourself about recently. It doesn\u2019t have to be the biggest thing — it can be small. Just let it be present. Don\u2019t analyze it. Don\u2019t defend against it." },
          { label: 'Notice the feeling', seconds: 12, text: "Notice what's here — not the story about it, just the feeling underneath. Is there heaviness? Shame? Sadness? Whatever is here, name it quietly: \u2018There is _______ here.\u2019 You don\u2019t have to fix it. Just let it be acknowledged. This is real." },
          { label: 'A hand on your chest', seconds: 10, text: "Place one hand on your chest, or wherever feels natural. Feel the warmth of your own hand. Feel your chest rise and fall." },
          { label: 'Offer yourself kindness', seconds: 16, text: "Offer yourself one sentence — the sentence you would say to someone you love sitting with exactly this. Not advice. Not a solution. Just something kind. Say it, silently or aloud. If nothing came, try: \u2018This is hard, and I\u2019m doing what I can.\u2019 Or simply: \u2018I\u2019m here. I\u2019m not going anywhere.\u2019" },
          { label: 'Common humanity', seconds: 16, text: "Whatever you're struggling with right now — you are not the only person sitting with something like this today. Somewhere in the world, someone else is carrying something very similar. The same self-doubt. The same exhaustion. You are not uniquely broken. You are human — in the company of every other human who has ever tried and struggled and kept going anyway. That company is enormous. And you belong in it." },
          { label: 'Close', seconds: 10, text: "Take one more breath in — slow and full. And out — completely. When you open your eyes, carry just one thing: the next time the inner critic speaks, you don\u2019t have to agree with it. You can notice it, name it, and offer yourself something a little warmer. That's enough. That's the practice." }
        ] }
    },
    {
      id: 'm4',
      icon: '🧭',
      title: 'Identity: Knowing Who You Are',
      subtitle: 'Deeper exploration',
      tagline: 'Most people spend their lives becoming who others needed them to be. This module is about finding out who you actually are.',
      lessons: [
        {
          id: 'l4-1', title: 'What Is Identity and Why Does It Matter?', time: '5 min',
          body: `
            <p>Your identity is your answer to the question: who am I? Not what you do, not what role you occupy, not how others see you — but the felt sense of a continuous, coherent self that persists across situations and time. Almost everything else in psychological life rests on that thread.</p>
            <p>A stable identity provides: <strong>a secure base for decisions</strong> (oriented by an internal compass rather than fear of criticism); <strong>resilience through change</strong> (a core that persists even when external structure shifts); <strong>authentic relationships</strong> (being genuinely known rather than performed for); <strong>the capacity to say no</strong> (boundaries require a self to protect); and <strong>protection against manipulation</strong>, which typically works by exploiting uncertainty about self-worth and identity.</p>
            <p><strong>Identity vs. self-esteem:</strong> self-esteem answers "am I okay?" — your evaluation of yourself. Identity answers "who am I?" — the content of who you are. You can have a clear identity but low self-esteem (knowing exactly who you are, and judging that person harshly). Both matter, and this course addresses both.</p>
            <p>Identity is not something you discover once and possess permanently — it's an ongoing process of construction, shaped by experience and reflection. Identity uncertainty isn't evidence of deficiency; it's part of how identity works. The question is whether you're relating to that process consciously — or whether it's being shaped primarily by forces outside yourself.</p>`,
          takeaway: 'Identity is your answer to "who am I?" — a stable sense of self that provides the foundation for authentic decisions, relationships, and resilience through change.'
        },
        {
          id: 'l4-2', title: 'When Identity Feels Uncertain', time: '5 min',
          body: `
            <p>There are specific moments when identity stops being philosophical and becomes urgent — when the structures that organized your sense of self shift or disappear. These moments are not pathological; they're some of the most significant and potentially transformative experiences life offers, even when genuinely disorienting.</p>
            <p>Much of what passes for identity is <strong>role identity</strong> — self built from the roles you occupy: parent, professional, the responsible one. These are real and meaningful, but contingent on the role remaining stable. When a role changes dramatically — retirement, a relationship ending, becoming a parent, career loss, illness, leaving a community or belief system — the identity built around it loses its scaffolding, even when the change is desired.</p>
            <p>What helps: <strong>naming what's happening</strong> — recognizing you're in an identity transition reduces its power to frighten (you're not falling apart, you're reorganizing); <strong>holding the uncertainty without rushing to resolve it</strong> — the temptation is to grab the nearest available identity, but sitting with uncertainty longer than comfortable often produces more authentic outcomes; <strong>returning to values</strong>, which remain stable when roles and circumstances shift; and <strong>staying connected</strong> — isolation deepens disorientation, while people who know you well can reflect back who you are beyond the role that's changed.</p>`,
          takeaway: 'Identity transitions are normal, triggered by loss, change, and reinvention. Values, connection, and the willingness to sit with uncertainty are the most reliable navigation tools.'
        },
        {
          id: 'l4-3', title: 'Building an Identity That Belongs to You', time: '5 min',
          body: `
            <p>If you strip away your job title, relationship status, achievements, and roles — what's left? For many people that question produces genuine unease — not because there's nothing there, but because so much of what felt like self was actually situation.</p>
            <p><strong>Three common borrowed identities:</strong> the <strong>achievement identity</strong> (worth built on accomplishment — looks confident from outside, but feels like running from inside; if you stop achieving, you stop existing in any meaningful sense); the <strong>relational identity</strong> (self organized around being needed by specific people — produces anxiety around any relationship change); and the <strong>reflected identity</strong> (sense of self built on how others respond — you are who the last person told you you were, making genuine self-knowledge almost impossible).</p>
            <p>A self-authored identity is built on things that don't depend on external conditions: <strong>your values</strong>; <strong>your characteristic ways of engaging with the world</strong> — how you approach problems, what you find funny, how you treat people when no one is watching; <strong>your history and the meaning you've made of it</strong> — the story you tell about your own life; <strong>your commitments</strong> — what you actually show up for, again and again; and <strong>your relationship with yourself</strong> — how you speak to yourself in private.</p>
            <p>Building this is ongoing practice — regularly asking: "is this choice coming from what I actually value, or what I think will be approved of? Who am I when I'm alone, when no one needs anything from me, when there's nothing to prove?" That last question is worth sitting with at length. The answer, however partial, is closer to your actual identity than almost anything else.</p>`,
          takeaway: 'Most of what passes for identity is borrowed from external structures. A self-authored identity is built on values, characteristic ways of engaging, personal history, commitments, and your relationship with yourself.'
        }
      ],
      capstone: { type: 'reflection', id: 'm4-identity', title: 'Identity Mapping Worksheet', prompts: [
        'List the things that currently feel most central to your sense of who you are — including the ones you\u2019d rather not admit you\u2019re relying on. For each: "if this changed or disappeared tomorrow, who would I be?" The ones that produce genuine anxiety are what your identity most depends on.',
        'Which borrowed identity type resonates most — achievement ("I am what I accomplish"), relational ("I am who I am to other people"), or reflected ("I am how others see me")?',
        'Setting roles and achievements aside entirely: what do you find genuinely interesting or beautiful, independent of anyone else\u2019s opinion? What makes you really laugh? What do you care about when no one is watching?',
        'Are you currently in an identity transition of any kind? If yes — what has changed, and what values remain stable regardless of it?',
        '"At my core — beyond my roles, my achievements, and others\u2019 opinions — I am someone who ________________." (You can be uncertain. You can say "I\u2019m not sure yet" as part of it.)'
      ]}
    },
    {
      id: 'm5',
      icon: '🌱',
      title: 'Living From the Inside Out',
      subtitle: 'Behavioral change',
      tagline: 'Understanding yourself is one thing. Actually living from that understanding is another. This module is where everything becomes real.',
      lessons: [
        {
          id: 'l5-1', title: 'How Low Self-Esteem Drives Self-Sabotage', time: '5 min',
          body: `
            <p>Self-sabotage — undermining your own efforts even when you consciously want them to succeed — isn't deliberate, but it isn't random either. It's almost always a logical response to low self-esteem operating beneath conscious awareness. When reality persistently contradicts a deeply held internal belief, the mind works — often unconsciously — to restore consistency. Self-sabotage is that restoration in action.</p>
            <p><strong>Common forms:</strong> procrastinating on what matters most (if you never fully try, you can never fully fail); undermining success after achieving it (minimizing it closes the gap between the achievement and your self-concept); choosing unavailable or critical partners (familiar, consistent with what you expect); leaving before being left (self-directed pain feels more bearable than confirmation of rejection); inviting criticism or conflict (making the bad thing happen feels better than waiting for it); and staying small to stay safe.</p>
            <p>Interrupting the pattern works at two levels: <strong>the belief level</strong> — what does this pattern protect against? What would it mean if you didn't sabotage this? — and <strong>the behavioral level</strong> — making one different choice in one specific moment and noticing what happens. The discomfort of acting against the pattern is real; it feels like violating something. That wrongness is just the gap between new behavior and old belief. It narrows with repetition.</p>`,
          takeaway: 'Self-sabotage is a logical protective response to low self-esteem, not a character flaw. Interrupting it means understanding the logic and choosing differently anyway.'
        },
        {
          id: 'l5-2', title: 'Setting Standards for How You Allow Yourself to Be Treated', time: '5 min',
          body: `
            <p>People with low self-esteem consistently accept treatment that people with healthier self-regard wouldn't — not because they enjoy it, but because it confirms what they believe about themselves, confronting it feels risky, and they haven't yet built a clear sense of what they deserve.</p>
            <p>Why low self-esteem produces low standards: <strong>familiarity</strong> (disrespect can feel more comfortable than the unfamiliar experience of being genuinely valued); <strong>fear of consequences</strong> (setting standards means being willing to enforce them, and enforcement feels catastrophic when the relationship feels irreplaceable); <strong>not knowing what you're entitled to</strong> (the baseline has been normalized so low that unacceptable treatment feels ordinary); and <strong>confusing standards with selfishness</strong>.</p>
            <p>Standards aren't a demand for perfection — people are imperfect and relationships need tolerance and repair. They're about chronic patterns: expecting basic respect even during conflict, not accepting dismissal of your feelings, expecting your effort to be reciprocated. In professional settings: expecting credit for your work, not accepting contempt, naming unreasonable expectations. Internally: refusing to speak to yourself in ways you'd never accept from another person.</p>
            <p>Build gradually: notice — without immediate action — the moments you feel diminished. Then practice small, calm responses in low-stakes situations. Each time you set a standard and the feared catastrophe doesn't happen, the belief that you can't afford standards loses a little ground. The most important standard to set first is usually the internal one — how you speak to yourself.</p>`,
          takeaway: 'The standard you hold for how you\u2019re treated is a direct expression of self-esteem — and it can be actively raised, starting with the internal standard.'
        },
        {
          id: 'l5-3', title: 'Showing Up Authentically', time: '5 min',
          body: `
            <p>There's a particular exhaustion that comes from performing a version of yourself calibrated to be approved of and safe — the exhaustion of maintaining a constructed self across every context and audience. Most people don't experience it as performance; it started early enough to feel like simply being themselves, felt instead as vague discomfort or going through the motions.</p>
            <p>Authenticity requires internal safety — the sense that who you actually are is acceptable enough to be visible. When self-esteem is low, that safety doesn't exist, so a modified version gets presented instead: one that hides uncertainty, agrees more than it actually agrees, minimizes itself, performs an ease it doesn't feel. This isn't deliberate dishonesty — it's a deeply learned protective response.</p>
            <p>Authenticity requires: <strong>knowing what you actually think and feel</strong> (many people have edited their responses for so long that genuine access has become difficult); <strong>tolerating the discomfort of being seen</strong> (each genuine exchange that goes okay is evidence the authentic self is more acceptable than fear suggested); <strong>speaking honestly when it's costly</strong> (disagreeing with the room, saying no, asking for what you need); and <strong>allowing yourself to be inconsistent and in process</strong> rather than presenting a fully resolved self.</p>
            <p>Authenticity and self-esteem reinforce each other: higher self-esteem makes authenticity more possible, but authentic living also builds self-esteem — each time you show up genuinely and the sky doesn't fall, the belief that the authentic self is unacceptable loses a little power. You don't need to wait until self-esteem is high enough to begin. Small acts of authentic self-presentation, in safe relationships, are themselves the practice.</p>`,
          takeaway: 'Low self-esteem produces inauthenticity as protection. Closing the gap between performed and actual self is both a product of growing self-esteem and a builder of it.'
        }
      ],
      capstone: { type: 'plan', id: 'm5-plan', title: 'My Self-Esteem Action Plan',
        note: "Not a perfect plan. A real one — grounded in where you actually are and what's genuinely possible from here.",
        sections: [
          { icon: '🪤', title: 'Self-Sabotage', fields: [
            { name: 'sabotagePattern', label: 'Which self-sabotage patterns from Lesson 5.1 do you recognize in your own life? What\u2019s the most significant way you get in your own way?' },
            { name: 'sabotageBelief', label: 'What belief about yourself is driving that pattern?' },
            { name: 'sabotageChoice', label: 'One small different choice you could make this week in that area' },
          ]},
          { icon: '📏', title: 'Standards', fields: [
            { name: 'acceptingTreatment', label: 'Where in your life are you currently accepting treatment — from others or from yourself — that doesn\u2019t reflect how you\u2019d like to be treated?' },
            { name: 'standardDifficulty', label: 'What has made it difficult to set a higher standard there?' },
            { name: 'standardPractice', label: 'One low-stakes situation where you could practice setting a small standard this week' },
          ]},
          { icon: '🌤️', title: 'Authenticity', fields: [
            { name: 'mostGenuine', label: 'Where in your life do you feel most genuinely yourself — least performed, least edited?' },
            { name: 'mostPerformed', label: 'Where do you feel most performed — most different from who you actually are?' },
            { name: 'fivePercent', label: 'What would it look like to be five percent more authentic in one specific context this week?' },
          ]},
          { icon: '🧭', title: 'Values Revisited', fields: [
            { name: 'valuesAligned', label: 'Which of your values are you currently living in alignment with?' },
            { name: 'valuesCompromised', label: 'Which are you most consistently compromising — and for what?' },
            { name: 'coreCommitment', label: '"The shift I most want to make in how I relate to myself is ________________."' },
          ]},
        ] }
    },
    {
      id: 'm6',
      icon: '🤝',
      title: 'When to Seek More Help',
      subtitle: 'Safety & guidance',
      tagline: 'Self-esteem work is some of the most meaningful work a person can do. Sometimes it needs a guide.',
      lessons: [
        {
          id: 'l6-1', title: 'Signs Your Self-Esteem Needs Professional Attention', time: '4 min',
          body: `
            <p>This course has covered substantial ground — for many people, structured self-reflection like this produces real and lasting shifts. But the roots of low self-esteem often live in early experiences and deeply internalized beliefs formed before conscious memory — and working with those roots sometimes requires the kind of sustained, skilled support only professional help can provide. Recognizing that isn't a failure of effort — it's accurate self-assessment, the very skill this course has been building.</p>
            <p><strong>Signs professional support would significantly help:</strong> the inner critic is severe and relentless, interfering with functioning or turning abusive in its language; low self-esteem is connected to early trauma or abuse (self-help can support, but trauma-informed therapy works at the level where that material is stored — in the body, in implicit memory); you're experiencing significant depression alongside low self-esteem; relationship patterns are persistently and significantly affected; self-sabotage continues despite genuine effort over time; shame is profound and pervasive; or you're having thoughts of self-harm or suicide — please reach out for support now.</p>
            <p>The question worth asking: <em>"Have I been carrying this long enough, and tried hard enough on my own, that I deserve the support of someone whose entire professional focus is helping people with exactly this?"</em> For most people reading this course, the answer is yes.</p>`,
          takeaway: 'Professional support is warranted when self-esteem issues are severe, trauma-rooted, or accompanied by shame or thoughts of self-harm. Seeking it is self-esteem in action.'
        },
        {
          id: 'l6-2', title: 'Types of Support Available', time: '5 min',
          body: `
            <p><strong>Schema Therapy</strong> — one of the most specifically relevant approaches for deep self-esteem work, identifying early maladaptive schemas (like the worthlessness schema) formed in childhood, and working with them through cognitive, experiential, and relational methods.</p>
            <p><strong>Internal Family Systems (IFS)</strong> — works with the psyche as different "parts," including the inner critic and the wounded younger self. Rather than silencing the critic, IFS works to understand what it's protecting and build a compassionate relationship between your core self and all its parts.</p>
            <p><strong>Compassion-Focused Therapy (CFT)</strong> — developed specifically for high self-criticism and shame, deliberately activating the brain's compassion system. Particularly useful for people who understand self-compassion intellectually but can't feel their way into it.</p>
            <p><strong>Psychodynamic and Relational Therapy</strong> — longer-term work exploring how early relational experiences shaped self-concept and how those patterns repeat now, using the therapeutic relationship itself as a site for new experience.</p>
            <p><strong>EMDR</strong> — when low self-esteem has roots in specific traumatic experiences, EMDR can process those experiences at the level they're stored. <strong>Group therapy</strong> offers the experience of being genuinely seen and accepted by multiple people — particularly powerful when self-esteem issues are rooted in rejection or not belonging.</p>
            <p>More than in most therapeutic work, the quality of the relationship with your therapist matters enormously here — you're working on your fundamental relationship with yourself, and that happens most effectively within a relationship that itself feels safe and non-judgmental. If a therapist doesn't feel like a good fit, that's important information worth acting on.</p>`,
          takeaway: 'Several therapeutic approaches — schema therapy, IFS, and compassion-focused therapy among them — are specifically designed for deep self-esteem and identity work.'
        },
        {
          id: 'l6-3', title: 'How to Talk to Someone When Shame Makes It Hardest', time: '5 min',
          body: `
            <p>There's a particular cruelty in how shame operates around help-seeking. Shame — the experience of being fundamentally defective — is one of the primary drivers of low self-esteem, and it's also what makes asking for help feel most impossible, because it requires revealing vulnerability that feels like handing someone the evidence they need to confirm your worst fear.</p>
            <p>Shame's narrative around help-seeking: "if I tell someone how I really feel about myself, they'll see what I've been hiding." "A competent person wouldn't need this." "What I'm dealing with isn't bad enough to warrant help." Every one of these is shame speaking, not reality.</p>
            <p>What actually tends to happen when you tell someone is quite different from the feared response. A good therapist has heard versions of what you're carrying from hundreds of people — the experience of feeling fundamentally not enough is one of the most universal in human life. What most people experience, often to their surprise, is not judgment but being met — recognized, having something named that's been felt but never articulated.</p>
            <p>You don't need a prepared speech. Starting points that work: "I've been struggling with how I feel about myself for a long time and I think I need help." "I have a very harsh inner critic and it's affecting my life significantly." If even that feels like too much, start smaller — tell one trusted person one honest thing: "I've been really hard on myself recently." That conversation, however brief, is itself an act of courage shame says isn't possible — and when the person responds with care, it becomes evidence against shame's prediction.</p>
            <div id="tool-openers" class="tool-mount"></div>`,
          takeaway: 'Asking for help when you struggle to believe you deserve it is one of the most profound expressions of self-esteem available — the self-esteem you are choosing to build.'
        }
      ],
      capstone: { type: 'resources', id: 'm6-resources', title: 'Resource List' }
    }
  ]
};

const RESOURCES = {
  crisis: [
    { name: 'Befrienders Kenya', detail: '24/7 · 0722 178 177', href: 'tel:0722178177' },
    { name: 'Kenya Red Cross', detail: '24/7 · 1199', href: 'tel:1199' },
    { name: 'International Association for Suicide Prevention', detail: '24/7 · crisis centers by country', href: 'https://www.iasp.info/resources/Crisis_Centres/' },
  ],
  therapy: [
    { name: 'AfyaMind Find a Therapist', detail: 'Verified providers, filter by specialty and language', href: 'help.html' },
    { name: 'Psychology Today Therapist Finder', detail: 'Search by location, specialty, insurance, budget', href: 'https://www.psychologytoday.com' },
  ],
  community: [
    { name: "Women's Wellness (AfyaMind Community)", detail: 'Peer support, anonymous', href: 'community.html' },
    { name: 'r/selfesteem', detail: 'Peer community — not professional support, but often normalizing', href: 'https://www.reddit.com' },
  ],
  reading: [
    { name: '"Self-Compassion" by Kristin Neff', detail: 'The foundational research-backed book on the topic', href: null },
    { name: '"The Gifts of Imperfection" by Brené Brown', detail: 'On shame, worthiness, and authenticity', href: null },
  ]
};

const OPENERS = {
  friend: [
    "I've been struggling with how I feel about myself for a long time and I think I need to talk about it.",
    "I've been really hard on myself recently and I wanted to tell someone I trust.",
  ],
  doctor: [
    "I've been struggling with my self-esteem in a way that's affecting my daily life and I'd like to talk about support options.",
  ],
  therapist: [
    "I have a very harsh inner critic and it's affecting my life significantly — I don't know where to start but I know I need support.",
    "I've never talked to anyone about this before, and I'm not sure how to explain it, but I know something needs to change.",
  ]
};

const THINKING_TRAPS = ['All-or-Nothing Thinking', 'Overgeneralization', 'Disqualifying the Positive', 'Emotional Reasoning', 'Comparison', 'Should Statements', 'Mind Reading', 'Not sure yet'];