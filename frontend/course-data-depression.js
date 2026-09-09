/* ============================================================
   AfyaMind — Course Data: Understanding & Managing Depression and Low Mood
   Load this BEFORE course-engine.js
   ============================================================ */

const COURSE_ID = 'depression-lowmood-v1';
const COURSE_TITLE = 'Understanding & Managing Depression and Low Mood';

const COURSE = {
  title: COURSE_TITLE,
  audience: 'General Adults',
  format: 'Self-paced modules',
  duration: '45–60 min total',
  modules: [
    {
      id: 'm1',
      icon: '🌧️',
      title: "What's Actually Going On?",
      subtitle: 'Psychoeducation',
      tagline: 'Depression is not weakness. Not laziness. Not a choice. Let\u2019s start with what it actually is.',
      lessons: [
        {
          id: 'l1-1', title: 'What Is Depression vs. Low Mood?', time: '4 min',
          body: `
            <p>Everyone feels sad sometimes. Life brings loss, disappointment, and pain — and feeling low in response is human, not a problem to fix. But depression is something different from ordinary sadness or a bad few days, and understanding that difference shapes both how you respond and what kind of support actually helps.</p>
            <p><strong>Low mood is typically:</strong> tied to a specific event or circumstance, temporary, responsive (a good conversation or decent sleep can lift it, even briefly), and proportional to the situation.</p>
            <p><strong>Depression is typically:</strong> persistent (two weeks or more), pervasive — coloring everything rather than one area of life, unresponsive — things that used to bring pleasure no longer do, disproportionate — it can arrive without an obvious trigger, and physical — affecting sleep, appetite, and energy.</p>
            <p>Depression doesn't always look like sadness. For many people — particularly men, and often people who are highly functional — it shows up as persistent emptiness or numbness, irritability or a short fuse, physical exhaustion sleep doesn't fix, or a quiet sense that nothing matters.</p>
            <p>If you've been wondering whether what you feel "counts" as depression — that question is worth taking seriously. Depression has a way of minimizing itself, telling you that you're being dramatic or that others have it worse. That voice is part of the condition, not an accurate assessment.</p>`,
          takeaway: 'Depression is distinct from ordinary low mood in its persistence, pervasiveness, and physical impact. Recognizing which you\u2019re experiencing is the first step toward responding effectively.'
        },
        {
          id: 'l1-2', title: 'What Happens in Your Brain and Body', time: '4 min',
          body: `
            <p>Depression is a real biological experience — not a mindset, not an attitude, and not something a person simply decides their way out of. Understanding what's actually happening removes blame and replaces it with understanding.</p>
            <p><strong>In the brain:</strong> depression involves reduced activity in serotonin (mood regulation), dopamine (motivation and pleasure), and norepinephrine (energy and alertness) — which is why low mood, loss of motivation, inability to feel pleasure, and exhaustion so often arrive together; they're expressions of the same underlying disruption. The prefrontal cortex (decision-making, emotional regulation) becomes less active, while the amygdala (threat and negative emotion) often becomes overactive.</p>
            <p><strong>In the body:</strong> profound fatigue that sleep doesn't fully restore, psychomotor changes (movement and speech slowing, or restless agitation), appetite changes in either direction, physical pain (headaches, back pain, digestive issues), and even lowered immunity.</p>
            <p>When you understand these are real neurological and physiological changes, two things become clear: the difficulty of "just feeling better" makes complete sense — you're not failing at something simple — and treatment works, because these are biological changes that respond to appropriate intervention.</p>`,
          takeaway: 'Depression involves measurable changes in brain chemistry, brain structure, and physical health. It is a real biological condition — and like other biological conditions, it responds to appropriate care.'
        },
        {
          id: 'l1-3', title: 'The Depression Cycle: How It Keeps You Stuck', time: '5 min',
          body: `
            <p>One of the cruelest things about depression is that it creates conditions that maintain and deepen itself. Understanding this cycle doesn't make it easier to break immediately, but it makes it far less mysterious.</p>
            <p style="text-align:center;font-weight:700;color:var(--c-primary);margin:20px 0;">Depression arrives → Withdrawal begins → Positive input dries up → Mood drops further → Thinking turns negative → Withdrawal deepens</p>
            <p>Withdrawal feels like self-protection — conserving limited energy. But it removes the very things that generate mood and energy: connection, movement, meaningful activity, light. Without those inputs, mood drops further, which makes withdrawal feel even more justified.</p>
            <p><strong>Loss of pleasure (anhedonia)</strong> — food loses flavor, music sounds flat, time with loved ones feels like going through the motions. Not ingratitude — a neurological change in the brain's reward system. When pleasurable things stop feeling pleasurable, people stop doing them, removing what little mood-lifting input remained.</p>
            <p><strong>The waiting trap</strong> — many people wait to feel motivated before acting: "I'll reach out when I feel more sociable." But with depression, the feeling rarely comes first. Action — however small and reluctant — is almost always what generates the feeling. This counterintuitive truth is the foundation of Module 3.</p>
            <p>The depression cycle is not your fault. You didn't choose to withdraw or think negatively — these are symptoms. But the cycle shows you where you can intervene, even when everything feels impossible. Small actions taken against its pull are not small.</p>`,
          takeaway: 'Depression maintains itself through a cycle of withdrawal, reduced positive experience, and negative thinking. Understanding the cycle reveals where — and how — it can be interrupted.'
        }
      ],
      capstone: { type: 'reflection', id: 'm1-reflect', title: 'Module 1 Reflection', prompts: [
        'Reading the difference between low mood and depression — where do you think you currently sit? What makes you say that?',
        'Which physical or biological symptoms from Lesson 1.2 do you recognize in yourself? Which surprised you?',
        'Looking at the depression cycle — where do you think you are in it right now? What\u2019s been driving it?'
      ], note: "You don't need to have answers yet. Noticing is enough." }
    },
    {
      id: 'm2',
      icon: '🔍',
      title: 'Recognizing Where You Are',
      subtitle: 'Self-awareness',
      tagline: "You can't find your way out without first knowing where you are. This module helps you see clearly — and honestly.",
      lessons: [
        {
          id: 'l2-1', title: 'The Spectrum: From Low Mood to Clinical Depression', time: '5 min',
          body: `
            <p>Depression isn't a single fixed experience — it exists on a spectrum, from mild persistent low mood that quietly diminishes quality of life, to severe depression that makes basic functioning feel impossible. Understanding the spectrum helps you assess your own experience and dismantles the damaging idea that your depression isn't "bad enough" to deserve attention.</p>
            <p><strong>Mild</strong> — present but doesn't prevent functioning; everything feels harder, less rewarding, vaguely colorless. Easy to dismiss as "just tired" or "just stressed" — but left unaddressed, it tends to deepen.</p>
            <p><strong>Moderate</strong> — begins to significantly impact daily functioning. Work and relationships become effortful, self-care starts to slip, negative thinking becomes more constant. A growing gap opens between who you used to be and who you are now.</p>
            <p><strong>Severe</strong> — profoundly debilitating; getting out of bed, eating, or communicating can feel genuinely beyond reach. Hopelessness can become overwhelming, and thoughts of self-harm may arise. Severe depression always warrants urgent professional support — we address this directly in Module 6.</p>
            <p><strong>Persistent Depressive Disorder (dysthymia)</strong> — worth mentioning separately: a chronic, low-level depression lasting two years or more, often normalized as "just my personality." If you've felt quietly low or flat for as long as you can remember, that's still depression and it still responds to treatment.</p>
            <p>An important note: depression distorts self-assessment — minimizing itself even while catastrophizing everything else. "I'm not depressed, I'm just tired" is a common expression of this.</p>`,
          takeaway: 'Depression exists on a spectrum from mild to severe. No point on that spectrum is too small to deserve attention.'
        },
        {
          id: 'l2-2', title: 'Physical, Emotional, and Behavioral Signs', time: '5 min',
          body: `
            <p>Depression expresses itself across your whole experience — not just how you feel, but how your body functions and how you behave. Many people recognize the emotional dimension but miss the physical and behavioral signs entirely.</p>
            <p><strong>Physical:</strong> profound fatigue even after sleep, sleep disturbance in either direction (insomnia or hypersomnia), appetite and weight changes, psychomotor slowing or restless agitation, unexplained physical pain, reduced libido, lowered immunity.</p>
            <p><strong>Emotional:</strong> persistent sadness or emptiness, numbness or flatness, anhedonia (loss of pleasure), hopelessness, worthlessness or excessive guilt, irritability (especially common in men), and anxiety, which frequently co-occurs with depression.</p>
            <p><strong>Behavioral:</strong> social withdrawal, reduced activity, neglected responsibilities, decreased productivity, increased alcohol or substance use, less communication, and neglected self-care.</p>
            <p>Depression in one dimension feeds depression in the others — physical fatigue drives withdrawal, withdrawal deepens emotional emptiness, emptiness generates physical heaviness. Seeing all three dimensions gives you more places to intervene.</p>`,
          takeaway: 'Depression is a whole-person experience — physical, emotional, and behavioral. Recognizing it across all three gives you a fuller picture and more entry points for change.'
        },
        {
          id: 'l2-3', title: 'How Depression Distorts Thinking: The Lies It Tells', time: '5 min',
          body: `
            <p>Depression is not a neutral observer of your life — it's an active narrator with a consistently negative point of view. And it does this with such confidence that its version of reality feels completely true. When you think "I'm a failure," it doesn't feel like distortion — it feels like an honest assessment.</p>
            <p>Psychologist Aaron Beck identified the <strong>cognitive triad</strong> — three core negative beliefs depression consistently produces:</p>
            <p><strong>1. Negative view of self</strong> — "I'm fundamentally inadequate, unlovable, or broken." It selectively recalls failures while filtering out successes. "I'm a burden to everyone." "I don't deserve good things."</p>
            <p><strong>2. Negative view of the world</strong> — filters present experience through a dark lens. A compliment gets dismissed as politeness; a good day gets filed as an exception. "Nothing ever works out for me."</p>
            <p><strong>3. Negative view of the future (hopelessness)</strong> — perhaps the most dangerous of the three. The future feels fixed, bleak, and unchangeable — not just unlikely to improve but almost logically impossible to. This is what makes depression feel so permanent from inside it.</p>
            <p>These thoughts feel true. They feel like honest self-assessment. But they are symptoms — as much as fatigue or loss of appetite are symptoms. They are depression's voice, not your voice. You don't need to immediately disbelieve them — that's very hard from inside depression. What matters first is simply learning to recognize them.</p>`,
          takeaway: 'Depression actively distorts thinking through three core beliefs — about self, world, and future. These thoughts feel true but are symptoms, not facts.'
        }
      ],
      capstone: { type: 'reflection', id: 'm2-moodmap', title: 'Personal Mood Mapping Worksheet', prompts: [
        'Which description — mild, moderate, or severe — most closely matches your current experience? How long have you felt this way, and has it been worsening, staying the same, or fluctuating?',
        'From the physical, emotional, and behavioral signs in Lesson 2.2 — which dimension feels most dominant for you right now?',
        'What does depression tell you about yourself? Write it as a specific sentence, as close to the actual thought as possible.',
        'What does depression tell you about your current life and circumstances?',
        'What does depression tell you about your future?',
        '"The thing depression is most stopping me from doing or feeling right now is ________________."'
      ], note: "There's no scoring system here — only self-awareness. Next to each thought you wrote above, try mentally adding: \u201cThis is depression.\u201d You don't have to believe it yet. Just practice placing it there." }
    },
    {
      id: 'm3',
      icon: '🌱',
      title: 'Getting Moving Again',
      subtitle: 'Behavioral Activation',
      tagline: "You don't wait for motivation to act. You act — and motivation follows. This module shows you how.",
      lessons: [
        {
          id: 'l3-1', title: 'Why Everything Feels Pointless — And Why You Should Act Anyway', time: '5 min',
          body: `
            <p>One of the most disorienting things about depression is what it does to your relationship with action. Things that used to feel natural start to feel not just difficult but genuinely pointless. This isn't laziness or weakness — it's depression doing something specific to your brain's motivation and reward system.</p>
            <p>Normally your brain runs on a reward loop driven by dopamine: anticipate something pleasurable, act toward it, experience the reward, which reinforces the behavior. Depression disrupts this at multiple points — reducing dopamine activity so anticipation diminishes, then producing anhedonia so even forced action doesn't deliver its usual reward. Then it supplies a narrative: "See — there's no point."</p>
            <p><strong>The waiting trap, revisited:</strong> "I'll reach out when I feel more sociable." "I'll go for a walk when I have more energy." The logic feels reasonable, but depression doesn't generate those resources through waiting — it depletes them further.</p>
            <p>Here is the counterintuitive truth research has demonstrated consistently: <strong>with depression, action comes before motivation, not after it.</strong> You act — however reluctantly, however imperfectly — and readiness begins to emerge from the action itself. Not immediately. Not dramatically. But steadily, with repetition.</p>
            <p>Every small action taken against depression's pull does something real in the brain — restoring dopamine pathways, providing evidence against the depressive narrative, generating momentum. And in depression recovery, momentum is everything.</p>`,
          takeaway: 'Depression disrupts motivation and reward before you even begin — but action creates the conditions for motivation, not the other way around. You act first. The feeling follows.'
        },
        {
          id: 'l3-2', title: 'Behavioral Activation: How Small Actions Rebuild Motivation', time: '5 min',
          body: `
            <p>Behavioral Activation is one of the most extensively researched and consistently effective approaches to treating depression — sometimes as effective as medication alone for mild to moderate cases. The core principle: depression reduces activity, reduced activity deepens depression, and increasing activity — deliberately, starting small — reverses the cycle.</p>
            <p><strong>Step 1 — Map your current activity honestly.</strong> What do you actually do from waking to sleeping? Which activities have you stopped? Which parts of your day feel even slightly less heavy than others? That last question matters — those become your starting points.</p>
            <p><strong>Step 2 — Build an activity list.</strong> List things you used to do and have stopped, without filtering by whether you think you could do them now. Then list very small actions that feel almost achievable — making your bed, stepping outside for five minutes, sending one text.</p>
            <p><strong>Step 3 — Schedule, don't wait.</strong> "I'll try to walk sometime" is easily overridden. "I will walk to the end of the street at 10am tomorrow" is a specific commitment. Time, activity, duration — written down.</p>
            <p><strong>Step 4 — Do it regardless of how you feel beforehand.</strong> Depression will generate reasons not to. Do it anyway — not because you feel ready, but because you scheduled it.</p>
            <p><strong>Step 5 — Notice, don't evaluate.</strong> Resist judging whether it "worked." Just notice: "That was hard but I did it." These observations are data that quietly accumulate against the depressive narrative.</p>
            <p><strong>Step 6 — Build gradually.</strong> Once one activity feels slightly less effortful, add another. Depression was built gradually through withdrawal. Recovery is built gradually through reengagement.</p>`,
          takeaway: 'Behavioral Activation works by systematically reintroducing activity — starting small, scheduling specifically, and acting regardless of motivation.'
        },
        {
          id: 'l3-3', title: 'Pleasure vs. Achievement Activities: Why You Need Both', time: '4 min',
          body: `
            <p>Not all activities lift mood the same way. Research identifies two categories that work through different mechanisms — and both matter.</p>
            <p><strong>Pleasure activities</strong> — enjoyment, relaxation, sensory pleasure: music, nature, a good meal, time with a pet, gentle creative work. Because anhedonia reduces the intensity of pleasure, people often stop doing these — reasoning "I don't enjoy it anymore, so what's the point." That's depression's circular logic. These activities still produce something, even subtly, and repeated engagement gradually helps restore the brain's capacity for pleasure. The goal isn't to feel great — it's to notice whatever small response occurs.</p>
            <p><strong>Achievement activities</strong> — a sense of accomplishment regardless of task size: making your bed, replying to a message you've avoided, showering when staying in bed felt easier. Depression shrinks the sense of accomplishment — the mind says "that's nothing, anyone could do that" — but doing it while depressed required real effort. The standard shifts during recovery; that's not lowering the bar, it's being honest about the conditions.</p>
            <p>A simple daily target: one pleasure activity, however small; one achievement activity, however modest; one social or connective moment. Together they address depression from multiple directions at once.</p>`,
          takeaway: 'Pleasure and achievement activities lift mood through different mechanisms. A balanced plan includes both, and recalibrates what "counts" to reflect the real effort depression requires.'
        }
      ],
      capstone: { type: 'guidedsession', id: 'm3-session', title: 'Guided Motivation Reset',
        note: 'Use this in the moments when depression\u2019s pull feels strongest — before attempting a scheduled activity, or whenever withdrawal feels like the only option.',
        steps: [
          { label: 'Arrive', seconds: 10, text: "Find wherever you are right now and just let yourself be there for a moment. You don\u2019t need to feel ready. You don\u2019t need to feel motivated. You just need to be here, for the next few minutes." },
          { label: 'Breathe', seconds: 8, text: "Take one breath in — slow, through your nose. And let it go." },
          { label: 'Acknowledge', seconds: 12, text: "Whatever brought you to press play — a small flicker of wanting to try, or just going through the motions — that was enough. That was the right choice. Depression tells you nothing will help, that you don\u2019t have the energy, that you should wait until you feel better. But you\u2019re here. Which means some part of you hasn\u2019t fully believed it. Hold onto that part." },
          { label: 'Notice your body', seconds: 10, text: "Bring your attention to your body — not to change anything, just to notice. Feel the weight of yourself wherever you\u2019re sitting or lying. Feel the temperature of the air. Take one slow breath and notice your chest rise. You are here. You are present. That's real." },
          { label: 'Name one thing', seconds: 12, text: "Think of the one small thing you\u2019ve scheduled or intended to do today. Not the whole list — just one thing. Hold it in your mind for a moment." },
          { label: 'Notice depression\u2019s voice', seconds: 10, text: "Notice what depression says about it. It won\u2019t help. It\u2019s too hard. What\u2019s the point. Just notice those thoughts. You don\u2019t have to argue with them. You don\u2019t have to believe them either." },
          { label: 'The truth about motivation', seconds: 14, text: "Here is what research tells us, and what people who\u2019ve moved through depression know from the other side: the feeling you\u2019re waiting for doesn\u2019t come before the action. It comes from the action. Not always immediately. Not always dramatically. But it comes." },
          { label: 'One thing', seconds: 10, text: "In a moment — not yet, but soon — you\u2019re going to do one thing. Just one. It can be small. It can be imperfect. It doesn\u2019t need to feel meaningful before you start." },
          { label: 'Say it after', seconds: 12, text: "When you\u2019ve done it — however it felt — say to yourself, quietly or out loud: \u2018I did that. Depression said I wouldn\u2019t. I did it anyway.\u2019 That sentence matters. Say it." },
          { label: 'Close', seconds: 10, text: "Take one more breath in through your nose — slow and full. And out — completely, letting everything release. When you\u2019re ready — and you are ready, even if it doesn\u2019t feel that way — begin." }
        ] }
    },
    {
      id: 'm4',
      icon: '🧩',
      title: 'Working With Depressive Thinking',
      subtitle: 'Cognitive tools',
      tagline: "Depression doesn't just change how you feel — it changes how you think. This module helps you tell the difference.",
      lessons: [
        {
          id: 'l4-1', title: 'Depression\u2019s Three Core Beliefs', time: '5 min',
          body: `
            <p>Aaron Beck called them the cognitive triad — three core beliefs depression reliably generates. They don't always arrive as clear thoughts; sometimes they're a background hum rather than a stated idea. But they're almost universally present, and they do most of the damage.</p>
            <p><strong>Worthlessness</strong> — "I am fundamentally inadequate, unlovable, or not enough." Not "I made a mistake" but "I am a failure." It feels like honest self-assessment — finally seeing yourself clearly. That's one of depression's most effective lies: the harshness feels like accuracy. What's actually happening is a prosecutor calling only witnesses that support conviction.</p>
            <p><strong>Hopelessness</strong> — "Nothing will change." This belief is particularly dangerous because it removes the motivation to try, and it's the belief most strongly associated with suicidal thinking (addressed directly in Module 6). It feels like clear-eyed realism. It's actually a neurological distortion. People recover from depression — consistently, across every severity level. The hopelessness that says otherwise is depression speaking, not reality.</p>
            <p><strong>Helplessness</strong> — "There's nothing I can do." It tells you your actions don't matter, producing a paralysis that feels like realism but is resignation. This belief is self-fulfilling: if you believe action is ineffective, you stop acting; when nothing changes, the belief feels confirmed.</p>
            <p>Together these three form a closed system — worthlessness says something's wrong with you, hopelessness says it won't change, helplessness says you can't change it. The work isn't dismantling them immediately — that's often not possible from inside depression. The work begins with recognition: naming "that's the worthlessness belief talking" rather than treating it as unquestionable reality. That gap is where recovery enters.</p>`,
          takeaway: 'Depression generates three core beliefs — worthlessness, hopelessness, helplessness — that form a closed system. Recognizing them as depression\u2019s beliefs rather than facts is the first and most important step.'
        },
        {
          id: 'l4-2', title: 'Recognizing Depressive Thinking Traps', time: '5 min',
          body: `
            <p>Beyond the core triad, depression produces specific thinking patterns that apply those beliefs to everyday situations. Depressive thinking has a distinct character from anxious thinking — recognizing that character is what lets you catch it in real time.</p>
            <ol>
              <li><strong>All-or-nothing thinking</strong> — anxious thinking fears a future catastrophe; depressive thinking uses a present event to confirm a permanent truth. "I failed at this" becomes "I always fail."</li>
              <li><strong>Overgeneralization</strong> — one negative event proves a universal rule. Watch for always, never, everyone, nothing.</li>
              <li><strong>Mental filter</strong> — focusing exclusively on the one negative detail among many positives, like a drop of ink coloring an entire glass of water.</li>
              <li><strong>Disqualifying the positive</strong> — actively rejecting contradictory evidence. "They said I did well, but they were just being kind."</li>
              <li><strong>Jumping to conclusions</strong> — mind reading ("they've gone quiet, they're fed up with me") and fortune telling ("there's no point applying").</li>
              <li><strong>Magnification and minimization</strong> — amplifying failures, shrinking successes, often in the same mental movement.</li>
              <li><strong>Emotional reasoning</strong> — "I feel worthless, therefore I am worthless." Entirely circular — the feeling generated by depression becomes evidence for the belief that generates the feeling.</li>
              <li><strong>Personalization</strong> — taking excessive responsibility for things outside your control or with multiple causes.</li>
            </ol>
            <p>You don't need to memorize this list. What matters is pausing when a strong negative thought arrives and asking: "which of these might be operating here?" Even saying "that sounds like overgeneralization" creates distance — a brief separation that lets you question the thought rather than automatically accept it.</p>`,
          takeaway: 'Depression produces specific, recognizable thinking patterns. Naming them creates the distance needed to examine them rather than simply believe them.'
        },
        {
          id: 'l4-3', title: 'How to Gently Challenge Thoughts When Energy Is Low', time: '5 min',
          body: `
            <p>Depression depletes cognitive energy in a way anxiety typically doesn't. A full, rigorous thought-examination process requires mental engagement that severe depression often makes genuinely unavailable — a bit like telling someone with a broken leg to run it off. So this lesson offers a tiered approach, matched to available energy. Use what you can access on any given day — the lower tiers are not failure.</p>
            <p><strong>Tier 1 — lowest energy days: simple recognition.</strong> When a strong negative thought arrives, say — mentally or aloud — "that's a depressive thought." Not "that's wrong." Just recognition. This tiny act of labeling activates observer mode rather than immersed mode, introducing a hair's breadth of distance. You are not your thoughts. You are the one noticing them.</p>
            <p><strong>Tier 2 — moderate energy: the single question.</strong> "Is this a fact — or is this depression?" Other useful single questions: "What would I say to a friend who had this thought?" "Has this thought been accurate before?" "What's the most realistic outcome — not the worst, not the best?" The question doesn't need to produce certainty, just doubt.</p>
            <p><strong>Tier 3 — higher energy: the gentle thought record.</strong> A simplified version of the anxiety course's full process — catch the thought, examine evidence, and generate a compassionate response, imagining what someone who genuinely loves and knows you would say about it. You don't have to believe it immediately. You just have to be able to hear it, alongside depression's version.</p>
            <p>Depression also produces a secondary layer of criticism about the recovery process itself — "I should be better at this by now." Apply the same gentle recognition: "that's a depressive thought about getting better. I don't have to believe it either." Progress in depression is rarely linear — it moves in small shifts, with setbacks. The measure of progress is the overall direction across weeks and months, not how you feel on the hardest day.</p>`,
          takeaway: 'Challenging depressive thoughts requires matching the approach to your available energy. On low days, simply naming a thought as depressive is enough.'
        }
      ],
      capstone: { type: 'thoughtrecord', id: 'm4-thoughtrecord', title: 'Low-Energy Thought Record',
        note: "This is a simplified thought record designed for the cognitive limitations depression produces. Use whichever tier from Lesson 4.3 matches your energy today — even just naming the trap and writing 'this is depression talking' is a complete, valid use of this tool." }
    },
    {
      id: 'm5',
      icon: '🌤️',
      title: 'Building a Life That Supports Recovery',
      subtitle: 'Lifestyle & connection',
      tagline: "Recovery doesn't happen in isolation. It happens in the small, steady rebuilding of a life that supports you.",
      lessons: [
        {
          id: 'l5-1', title: 'Why Connection Is Medicine', time: '5 min',
          body: `
            <p>Of all the things depression takes, connection is often the most quietly devastating loss — not because it disappears suddenly, but because it erodes gradually through small withdrawals that each feel reasonable, until the distance feels almost uncrossable.</p>
            <p>Chronic loneliness isn't just a consequence of depression — it's an independent risk factor for it. Connection activates oxytocin (safety, belonging), dopamine reward pathways, and what researchers call social regulation of emotion — your internal state being stabilized by another person's presence. Human beings are biologically wired for connection; its absence registers as a threat.</p>
            <p><strong>How isolation builds, stage by stage:</strong> withdrawal feels protective at first (conserving energy) → shame enters as the gap grows (a message unanswered for two weeks now feels like it needs an explanation you don't have energy for) → depression supplies a narrative ("they're probably annoyed with me," "I don't want to be a burden") → isolation starts to feel normal.</p>
            <p>"I don't want to be a burden" deserves particular attention — it presents as consideration for others but is actually depression's worthlessness belief applied to relationships. The people who love you would almost universally rather know you're struggling than be protected from it while you disappear. Needing support during depression is not a character flaw — it's a circumstance.</p>
            <p>Reconnection doesn't require a big conversation about everything. It can be a one-line message ("been a bit absent lately, thinking of you"), accepting one invitation even if you leave early, or letting someone make you tea. Quality matters more than quantity — one genuine interaction is worth more to your nervous system than a dozen surface-level obligations.</p>`,
          takeaway: 'Connection is a biological necessity, not a luxury. Small acts of reconnection, however imperfect, directly counteract one of depression\u2019s most powerful maintenance mechanisms.'
        },
        {
          id: 'l5-2', title: 'Rebuilding Structure When Everything Has Fallen Apart', time: '5 min',
          body: `
            <p>Routines that previously organized your days gradually collapse under depression's fatigue and withdrawal — and the collapse of structure deepens the depression. Structure reduces the number of decisions your brain has to make, creates predictability the nervous system finds regulating, and provides a scaffold of small purpose and momentum.</p>
            <p>The most important reframe: <strong>you are not rebuilding the life you had. You are building a structure appropriate for where you are right now.</strong> That's not settling — that's how recovery actually works.</p>
            <p><strong>Four structural anchors, research consistently points to:</strong></p>
            <ul>
              <li><strong>A consistent wake time</strong> — not a perfect bedtime, just a consistent time you get up, regardless of how you slept. This is the single most effective intervention for resetting your internal clock.</li>
              <li><strong>At least one proper meal</strong> — one balanced meal at roughly the same time. Not a perfect diet. One meal.</li>
              <li><strong>Some form of movement</strong> — five minutes outside, a short walk, stretching. The specific activity matters far less than the habit of moving.</li>
              <li><strong>One scheduled human contact</strong> — a phone call, a commitment to sit with someone — enough structure to make withdrawal harder than showing up.</li>
            </ul>
            <p>Start with one anchor, held consistently for a week, before adding another. One anchor consistently is more valuable than four attempted once and abandoned. It will collapse sometimes — that's not failure, that's the nature of recovering from a condition that actively resists it. The most important skill is returning to it quickly, without the self-criticism that treats one bad day as proof recovery is impossible.</p>`,
          takeaway: 'Rebuilding around four simple anchors — wake time, one meal, some movement, one human contact — creates the foundation recovery needs. Start with one. Build slowly. Return without judgment when it breaks.'
        },
        {
          id: 'l5-3', title: 'Self-Compassion as a Recovery Tool', time: '5 min',
          body: `
            <p>There is a voice that runs alongside depression in almost everyone who experiences it — relentless, precise, utterly convinced of its own accuracy. This self-criticism spiral is not a side effect of depression. It's one of its central mechanisms.</p>
            <p>When you criticize yourself harshly, your brain activates the same threat system that fires when you're in physical danger. This means self-criticism doesn't motivate recovery — it keeps your nervous system in chronic threat activation, which is the opposite of the conditions recovery requires. A brain under threat contracts, withdraws, conserves. It does not heal.</p>
            <p>Self-compassion is not self-indulgence, pretending everything's fine, or lowering your standards permanently. Psychologist Kristin Neff identifies three components: <strong>self-kindness over self-judgment</strong> ("this is hard, and I'm doing what I can" rather than "I should be doing better"); <strong>common humanity over isolation</strong> (millions of people are sitting with something very similar right now — you are not uniquely broken, you are human); and <strong>mindful awareness over over-identification</strong> (noticing "I'm having a hard day" without it becoming "this is who I am forever").</p>
            <p><strong>The self-compassion pause:</strong> when self-criticism is loud, ask "what would I say to a close friend going through exactly this?" — then say that to yourself. Not a watered-down version. The actual thing you'd say to someone you love.</p>
            <p>Research consistently shows self-compassion doesn't enable laziness — the opposite. People who practice it take more responsibility for mistakes, are more motivated to improve, and more resilient after failure than people who rely on self-criticism. The harsh internal voice isn't quality control — it's depression's most reliable maintenance mechanism.</p>`,
          takeaway: 'Self-criticism keeps your nervous system in chronic threat, which blocks recovery. Self-compassion creates the safety and warmth that recovery actually requires.'
        }
      ],
      capstone: { type: 'plan', id: 'm5-plan', title: 'My Depression Recovery Plan',
        note: "Answer what you can today. Return to the rest when you have more capacity. There is no deadline.",
        sections: [
          { icon: '🤝', title: 'Connection', fields: [
            { name: 'safePeople', label: 'Who in my life currently feels safe to be around — even imperfectly, even briefly?' },
            { name: 'reconnectAction', label: 'One small act of reconnection I could make this week', placeholder: 'A message, a call, accepting one invitation' },
            { name: 'connectionVoice', label: 'What does depression tell me about reaching out — and do I recognize that as depression talking?' },
          ]},
          { icon: '🧭', title: 'Structure', fields: [
            { name: 'anchorChoice', label: 'Which of the four anchors feels most accessible to start with?' },
            { name: 'anchorCommitment', label: 'What specific time or commitment will I attach it to?' },
            { name: 'anchorBreaks', label: 'What will I do when the structure breaks — without self-criticism?' },
          ]},
          { icon: '💛', title: 'Self-Compassion', fields: [
            { name: 'criticVoice', label: 'What does my self-critical voice say most often about my depression and my recovery?' },
            { name: 'friendVoice', label: 'What would I say to someone I love who was going through exactly this?' },
            { name: 'doingRight', label: '"One thing I am doing right, even in the middle of this, is ________________."' },
          ]},
          { icon: '🌅', title: 'Looking Forward', fields: [
            { name: 'supportiveLife', label: 'What does a life that supports my recovery look like — not perfectly, but realistically?' },
            { name: 'oneThingToTry', label: 'What is one thing I am willing to try this week from everything in this module?' },
          ]},
        ] }
    },
    {
      id: 'm6',
      icon: '🤝',
      title: 'When to Seek More Help',
      subtitle: 'Safety & guidance',
      tagline: "This course is a starting point. For many people with depression, it also needs to be a bridge to the right professional support.",
      lessons: [
        {
          id: 'l6-1', title: 'Signs Your Depression Needs Professional Attention', time: '5 min',
          body: `
            <p>Everything in this course has been built around what you can do — and for many people, particularly at the milder end of the spectrum, these tools make a genuine, lasting difference. But depression has a strong evidence base for professional treatment. Therapy and medication are not last resorts — they are first-line interventions that consistently produce outcomes self-help alone cannot always achieve.</p>
            <p><strong>Signs professional support is needed:</strong></p>
            <ul>
              <li>Your depression has lasted more than two weeks</li>
              <li>It's significantly affecting your ability to work, maintain relationships, or manage daily tasks</li>
              <li>You're withdrawing from everything that matters — your world has become very small</li>
              <li>Physical symptoms (sleep, weight, fatigue, pain) are significant and persistent</li>
              <li>You've genuinely engaged with this course's tools over several weeks and found no meaningful shift</li>
              <li>You're using alcohol or other substances to cope</li>
              <li>Depression is accompanied by significant anxiety</li>
              <li>You're a caregiver or parent and depression is affecting your capacity to care for others who depend on you</li>
              <li>You're having thoughts of death, self-harm, or suicide — please see Lesson 6.3 or the resource list below</li>
            </ul>
            <p>A question worth sitting with: <em>"Am I living anything close to the life I want — or has depression reduced what I expect from life to the point where I've stopped noticing how much has been taken?"</em> Depression narrows expectations gradually until the diminished life starts to feel normal. Professional support can help restore what's been quietly taken.</p>
            <div class="crisis-note">If you are in immediate danger or crisis, please use the resources at the end of this module or contact emergency services in your country — you do not need to manage this alone.</div>`,
          takeaway: 'Professional support for depression is a first-line intervention with a strong evidence base — not a last resort.'
        },
        {
          id: 'l6-2', title: 'Types of Support Available', time: '5 min',
          body: `
            <p>Depression is one of the most treatable conditions in mental health, and the combination of the right treatment with self-help tools produces significantly better outcomes than either alone.</p>
            <p><strong>Cognitive Behavioral Therapy (CBT)</strong> — the most extensively researched therapy for depression, building on Modules 3 and 4 with a trained therapist tailoring the process to you. Typically 12–20 sessions. Often a first treatment choice.</p>
            <p><strong>Behavioral Activation Therapy</strong> — a focused approach built entirely around Module 3's methods: activity scheduling, monitoring mood, gradually rebuilding engagement.</p>
            <p><strong>Interpersonal Therapy (IPT)</strong> — focuses on the relationship between depression and interpersonal difficulties: grief, role transitions, relationship conflict.</p>
            <p><strong>Mindfulness-Based Cognitive Therapy (MBCT)</strong> — developed for people with recurrent depression (three or more episodes), reducing relapse risk.</p>
            <p><strong>Medication (SSRIs/SNRIs)</strong> — increases availability of mood-regulating neurotransmitters. Typically takes 2–6 weeks to show effect. Prescribed and monitored by a doctor — never self-prescribed. Most effective combined with therapy.</p>
            <p><strong>Peer support and group therapy</strong>, <strong>teletherapy</strong>, and for severe depression, <strong>intensive outpatient or inpatient care</strong> — an appropriate response to a serious condition, not a measure of failure.</p>`,
          takeaway: 'Therapy — particularly CBT and behavioral activation — medication, and combined approaches all have strong evidence bases. The right support exists.'
        },
        {
          id: 'l6-3', title: "If You're Having Thoughts of Suicide", time: '6 min',
          body: `
            <p>This lesson is written directly to you — if you are having thoughts of ending your life, or if those thoughts have been present at any point during this course.</p>
            <div class="crisis-note">Before anything else: if you are in immediate danger right now, please stop and contact emergency services or a crisis line immediately. The resource list at the end of this module has numbers available right now, whatever time it is, wherever you are.</div>
            <p>Suicidal thoughts are a symptom of depression. They are not a rational conclusion, not a clear-eyed assessment of your worth or what the future holds. They are what happens when a mind in profound pain, operating under the neurological distortions of severe depression, runs out of other ways to imagine relief. That doesn't make the pain driving them any less real. But the thought that death is the only way out — that is depression's thinking at its most extreme. It is a symptom, not a truth. People recover from depression, including the severity that produces suicidal thinking. This is not false comfort — it is one of the most consistent findings in psychiatric research.</p>
            <p><strong>Why these thoughts arise</strong> — usually from one or more of three experiences: <strong>unbearable psychological pain</strong> (a desperate need for the pain to stop, not a desire to die); <strong>hopelessness</strong> (the conviction that things won't get better — a symptom, not a forecast); and <strong>feeling like a burden</strong> (the belief that others would be better off without you — this feels like love but is depression's worthlessness belief at its most dangerous. The people who love you would not be better off. The thought that says otherwise is depression, not truth).</p>
            <p><strong>What to do right now:</strong></p>
            <ul>
              <li><strong>Tell someone.</strong> A person you trust, a doctor, a therapist, or a crisis line. You don't need to explain everything — "I'm having thoughts of suicide and I need help" is enough to begin.</li>
              <li><strong>Contact a crisis line.</strong> Trained professionals are available at any hour. You don't need to be at the absolute edge to call.</li>
              <li><strong>Go to your nearest emergency department</strong> if you feel you're in immediate danger or cannot keep yourself safe. This is a medical emergency deserving the same response as any other.</li>
              <li><strong>Remove access to means</strong> — put distance between yourself and anything you've been thinking about. Tell someone where it is. This one step matters enormously.</li>
              <li><strong>Stay with other people.</strong> Suicidal crises are most dangerous when you're alone. Presence is protective.</li>
            </ul>
            <p>If you're supporting someone else — trust your instincts and ask directly: "are you having thoughts of suicide?" Research shows asking this does not plant the idea; it opens a door someone may have been hoping was opened. Then listen, don't minimize or fix, and help them access professional support.</p>
            <p>If you are still reading this — you are still here. Some part of you reached for this course and is still reading. That part matters. The pain is real. The exhaustion is real. And the possibility of things being different — however impossible that feels from here — is also real. Please reach out. You do not have to navigate this alone.</p>`,
          takeaway: "Suicidal thoughts are a symptom of depression, not a truth about your worth or future. Telling someone — anyone — is the single most important thing you can do right now."
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
    { name: 'Crisis Text Line (US, UK, Canada, Ireland)', detail: '24/7 · Text HOME to 741741', href: null },
    { name: '988 Suicide & Crisis Lifeline (US)', detail: '24/7 · Call or text 988', href: 'tel:988' },
  ],
  therapy: [
    { name: 'AfyaMind Find a Therapist', detail: 'Verified providers, filter by specialty and language', href: 'help.html' },
    { name: 'Psychology Today Therapist Finder', detail: 'Search by location, specialty, insurance, budget', href: 'https://www.psychologytoday.com' },
    { name: 'Your GP / Primary Care Doctor', detail: 'Can refer you to local mental health services', href: null },
  ],
  community: [
    { name: 'Depression Circle (AfyaMind Community)', detail: 'Peer support, anonymous', href: 'community.html' },
    { name: 'Anxiety and Depression Association of America (ADAA)', detail: 'Information, peer support groups, therapist finder', href: 'https://adaa.org' },
    { name: 'Mind (UK)', detail: 'Mental health information, local support groups', href: 'https://www.mind.org.uk' },
  ]
};

const THINKING_TRAPS = ['All-or-Nothing Thinking', 'Overgeneralization', 'Mental Filter', 'Disqualifying the Positive', 'Jumping to Conclusions', 'Magnification/Minimization', 'Emotional Reasoning', 'Personalization', 'Not sure yet'];