# DoCoTe MVP v1

## Product thesis
DoCoTe helps Jira-based software teams turn delivery work into usable documentation and release summaries.

The first version is intentionally narrow:
- documentation first
- Jira-native workflow
- human review before publishing
- no full autonomous code understanding claims

## MVP goal
For a Jira issue, generate:
1. Technical implementation summary
2. Documentation draft
3. Release summary

## Primary user
- Engineering lead
- QA lead / QA engineer
- Product owner / delivery lead

## Best-fit customers
- Jira-based software teams
- 10 to 200 people
- teams with structured delivery process
- teams where documentation lags behind implementation
- teams with QA handoff and release coordination pain

## Inputs for v1
### Required
- Jira issue title
- Jira issue description
- acceptance criteria or equivalent details
- issue type
- comments (optional but useful)

### Optional
- linked PR title and description
- commit/change summary pasted by user
- implementation notes

## Outputs for v1
### 1. Technical implementation summary
A concise summary covering:
- what changed
- why it changed
- impacted area or component
- delivery notes / constraints if visible

### 2. Documentation draft
Structured content that can later be edited and moved into docs.
Suggested format:
- overview
- business context
- implementation notes
- user or system impact
- known limitations / assumptions

### 3. Release summary
Short, release-ready summary for delivery teams and stakeholders.
Suggested format:
- change summary
- business/user impact
- deployment note if relevant

## User flow
1. User opens a Jira issue
2. User clicks `Generate documentation`
3. App collects Jira issue fields
4. User optionally adds PR/change context
5. App sends structured prompt to AI backend
6. App returns three outputs:
   - technical summary
   - documentation draft
   - release summary
7. User reviews and copies/saves output

## Non-goals for v1
- no automatic Confluence publishing
- no full repository indexing
- no autonomous code review
- no test generation yet
- no multi-platform support yet
- no enterprise governance features yet

## Success criteria for MVP
- users understand value in under 2 minutes
- outputs are useful enough to edit rather than rewrite from scratch
- at least one customer segment clearly prefers this over manual process
- users repeat usage across multiple tickets

## Risks
- output may feel generic if input quality is poor
- Jira issue data may be incomplete
- users may expect deeper code understanding than v1 provides
- positioning may be too broad if documentation-first wedge is not kept tight

## Validation plan
- test on 20 to 50 real Jira issues
- compare generated output against current manual process
- identify which output is most valuable:
  - technical summary
  - documentation draft
  - release summary
- interview likely users after 3 to 5 real uses

## Candidate pricing direction
### Early access
- free pilot or founder-led onboarding

### Later
- team subscription
- project-based tier
- usage-based tier for AI-heavy output

## Short positioning statement
DoCoTe turns Jira issues and change context into technical documentation and release-ready summaries, helping software teams keep delivery knowledge current without adding more manual work.
