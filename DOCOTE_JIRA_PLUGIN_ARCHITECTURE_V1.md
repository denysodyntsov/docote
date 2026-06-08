# DoCoTe Jira Plugin Architecture v1

## Recommendation
Start with **Atlassian Forge** for the first Jira app version.

Why Forge:
- faster MVP path for Jira-native app
- easier trust story than a heavier external integration from day one
- enough for a focused issue-panel style workflow
- lower initial operational complexity

## MVP architecture overview

### Frontend (Jira app UI)
Use Forge custom UI or UI Kit for the first version.

Recommended first surface:
- Jira issue panel / issue action

Main UI elements:
- button: `Generate documentation`
- optional text box: `Add PR or implementation context`
- output tabs/cards:
  - Technical summary
  - Documentation draft
  - Release summary

### Backend logic
Core backend responsibilities:
1. Read Jira issue data
2. Normalize issue fields into structured prompt input
3. Merge optional user-supplied PR/change context
4. Send prompt to LLM provider
5. Return structured output to UI
6. Optionally store generation history / feedback

### AI layer
Initial AI generation should be prompt-based, not workflow-heavy.

Suggested prompt structure:
- system instruction for documentation-first behaviour
- issue metadata
- description
- acceptance criteria
- comments summary
- optional PR/context block
- explicit required output sections

### Storage
For v1 keep storage minimal.

Store only if needed:
- generation history per issue
- last used custom context
- thumbs up / thumbs down feedback

Can start with:
- Forge storage
- or no persistence beyond current generation

## Data flow
1. User opens Jira issue
2. App loads issue context via Jira APIs
3. User clicks `Generate documentation`
4. Optional PR/change context is added
5. Backend builds prompt payload
6. AI provider generates structured response
7. Response is split into three outputs and shown in UI
8. User copies or saves content externally

## Suggested output contract
The backend should request strict JSON or clearly structured sections.

Example sections:
- technical_summary
- documentation_draft
- release_summary

This makes later export easier.

## Security / trust considerations
For v1:
- avoid claiming complete code understanding
- clearly label output as draft content
- keep user in review loop
- limit data sent to what is needed
- be transparent about optional PR/context input

## MVP feature list
### Must-have
- Jira issue panel integration
- read issue title/description/basic metadata
- optional free-text implementation context box
- generate three outputs
- regenerate button
- copy-to-clipboard for each output

### Nice-to-have
- save generation history
- feedback buttons
- formatting templates by issue type

### Later
- PR integration
- Confluence export
- release note formatting templates
- team-level prompt preferences
- test generation

## Engineering approach
### Phase 1
Build with mocked generation or simple provider integration.

### Phase 2
Refine prompts using real Jira samples.

### Phase 3
Add quality controls:
- better handling for poor issue descriptions
- issue-type-aware generation
- optional project template settings

## Open questions
- Should output be stored in Jira comments, app storage, or nowhere initially?
- Should release summary be short by default or configurable?
- Which issue types matter first: Story, Task, Bug, Epic?
- Should PR context be manual paste at first, or linked integration immediately?

## Recommendation for v1 scope
Keep it simple:
- Jira issue only
- optional pasted implementation context
- three generated outputs
- no external publishing yet

That is small enough to ship and strong enough to test with real users.
