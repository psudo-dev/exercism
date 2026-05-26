# Exercism

Welcome to my personal archive of [Exercism](https://exercism.org) exercises.

Just like with any other practice platform, nothing replaces building real-world projects — but Exercism has a different purpose in my learning stack.

It's less about grinding through exercises and more about going deeper: writing better code, understanding language idioms, learning best practices, and actually engaging with the community around it.

The goal isn't to complete every single exercise — it's to take the most out of the ones I do. If something isn't adding to my learning, I'll move on. This is a tool, not a checklist.

---

## Why Exercism over just doing projects

The thing that sets Exercism apart is the feedback loop. You submit a solution, a mentor reviews your actual code and points out what could be better, you refactor, and you compare with how other people solved the same problem. That cycle — write → get feedback → refactor → explore alternatives — is very close to how growth actually happens in a real team. It's the closest thing to a code review culture you can get outside of a job.

Beyond that, it pushes me to think about things I'd otherwise skip in a personal project: unnecessary abstractions, idiomatic patterns vs just making it work, and whether my code is actually readable to someone who didn't write it.

---

## Repository Purpose

- **Language Depth:** Going beyond syntax — understanding how a language is meant to be written, not just how to make it work.
- **Clean Code Habits:** Readability and maintainability first. Code is read way more often than it's written.
- **Mentorship & Community:** Using feedback from real developers and other solutions as part of the learning process.
- **Deliberate Refactoring:** Revisiting solutions after seeing other approaches, not just submitting and moving on.

---

## Coding Philosophy

My priority when solving these exercises is readability and maintainability over cleverness. I'm not here to write impressive one-liners or abuse obscure language features — unless I find one genuinely interesting, which I might explore out of curiosity.

---

## Project Structure

Exercism organizes everything by language track. Each track gets its own folder, and inside it one folder per exercise — that's just how the CLI downloads them.

```text
exercism/
├── typescript/
│   ├── exercise-name/
│   │   ├── README.md
│   │   ├── HELP.md
│   │   ├── exercise-name.test.ts
│   │   └── exercise-name.ts
│   └── ...
├── javascript/
│   └── ...
└── README.md
```

### Each exercise folder contains

- **`README.md`** — the original problem statement
- **`HELP.md`** — Exercism's guidance file for the exercise
- **`exercise-name.test.*`** — the test file (important — more on this below)
- **`exercise-name.*`** — my solution, sometimes with inline notes

---

## Practical Guide for Exercism

Exercism's own docs cover the basics, but there are a few things that aren't immediately obvious — especially if you're coming from other platforms. This is my attempt at a clearer walkthrough.

### 1. Install the CLI

Follow the [official installation guide](https://exercism.org/docs/using/solving-exercises/working-locally). It's straightforward.

Before you start downloading exercises, though, configure where you want them to land on your machine:

```bash
exercism configure --workspace=/your/preferred/path
```

You can also locate the file and edit it yourself:

```bash
exercism configure
```

Worth doing upfront — otherwise everything ends up wherever the default is and you'll reorganize later anyway.

### 2. Download an exercise

On each exercise page, Exercism gives you a command to copy and paste directly into your terminal. It looks like:

```bash
exercism download --track=language-name --exercise=exercise-name
```

### 3. Read HELP.md first

Before touching any code, read `HELP.md`. It tells you what commands are available, how to run tests, and any relevant context for that exercise. Skipping it tends to cause unnecessary confusion.

### 4. Install the Test Suite

Inside the exercise folder, run:

```bash
corepack yarn install
```

### 5. Open the test file before writing any code

This is the step that's easy to miss — and it matters a lot.

The test file (`exercise-name.test.*`) is where you find out exactly what the exercise is asking for: what arguments the function receives, what the expected return type is, what edge cases are covered. The problem description in `README.md` gives you the concept, but the test file gives you the contract.

Read through it before you write a single line. It'll save you from going in the wrong direction.

### 6. Run the tests

```bash
corepack yarn test
```

When you run this, you'll notice most tests show as `SKIPPED`. That's intentional — Exercism expects you to enable them one at a time as you implement each case.

To enable a test, open the test file and remove (or comment out) the `skip` from the test you want to run:

```typescript
// Before
xtest('some test description', () => { ... })
xit('some test description', () => { ... })

// After
test('some test description', () => { ... })
it('some test description', () => { ... })
```

Enable them progressively as you solve each case.

### 7. Submit your solution

```bash
exercism submit exercise-name.*
```

### 8. Mark as complete and explore other solutions

After submitting, go back to the exercise page on Exercism and mark it as complete. Once you do that, you unlock the community solutions. Look at how other people approached the same problem, especially the ones that are very different from yours.

---

## A few thoughts on the platform

Exercism is genuinely good. The mentorship model, the community, the focus on clean code — it's one of the more thoughtful platforms out there for actually learning a language rather than just collecting points.

That said, the onboarding experience can be a bit rough.

### Description and the initial file

If you just read the problem description and start coding, you might spend a while confused about what's actually expected. The test file is where the real spec lives, and that's not made clear enough upfront. For someone just starting out, that friction could easily feel discouraging rather than challenging.

### Manually editing the test file

The manual test enabling is another thing that feels like it has room to grow. I get that running one test at a time can help you stay focused on a single case — and maybe there's a reason for keeping it manual that has more to do with the exercise authoring side than the user side, who knows?

But from a user experience perspective, there's no reason why the test runner couldn't just tell you exactly which test failed and stop there. You'd still know where to look, you'd still open the test file, you'd still explore.

### Better instructions and automation wouldn't hurt

More clarity and automation here wouldn't take anything away from the learning process — it would just remove unnecessary friction and improve the overall user experience, even more for beginners.

And I say that because it bothers me, my mind automatically goes: how do you make the experience smoother for someone who's never used the platform before, without dumbing it down or removing the exploration that's core to how developers actually learn?

---

## My Exercism Profile

You can follow my progress directly on the platform:
[@psudo-dev](https://exercism.org/profiles/psudo-dev)
