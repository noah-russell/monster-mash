<h1>Documentation for Monster-Mash!</h1>

<h2>To Do:</h2>

<h3>Current Version V1</h3>
<ul>
    <li>[X] Colour state dependant brush size selector</li>
    <li>[X] Fix image files not deleting</li>
    <li>[X] Deploy</li>
    <li>[ ] Link URL</li>
    <li>[ ] Visual Indication of tool selected</li>
    <li>[ ] Undo button</li>
    <li>[ ] Additional drawing layer(?)</li>
    <li>[ ] Responsive canvas size</li>
    <li>[X] Variable Colin Messages (conflicting with animation state)</li>
    <li>[ ] Artist Comment</li>
    <li>[ ] Curtain reveal state</li>
    <li>[ ] Confrim delete popup</li>
    <li>[ ] Custom Mouse </li>
    <li>[ ] Favicon</li>
    <li>[ ] Canvas mouse represents selected dot</li>
    <li>[ ] Brush tool makes spikes and artifacts</li>
    <li>[ ] Increase responsiveness of Colin speech bubble</li>
    <li>[ ] </li>
    <li>[ ] </li>
</ul>

<h3>Wishlist V2</h3>
 <ul>
    <li>[ ] Authentification planning session</li>
    <li>[ ] User comments</li>
    <li>[ ] Scary/Cute Rating</li>
    <li>[ ] Multiple players</li>
    <li>[ ] AI image api</li>
    <li>[ ] Online Multiplayer Mode</li>
    <li>[ ] Mobile Version</li>
    <li>[ ] Bought out by Microsoft for $2Bn</li>
    <li>[ ] </li>
    <li>[ ] </li>
    <li>[ ] </li>
    <li>[ ] </li>
    <li>[ ] </li>
 </ul>



<h3>User Testing</h3>
<h4>User Feedback:</h4>

<h3>React states</h3>
<h4>Game states (gamePhase, setGamePhase)</h4>
<ul>
  <li>0. (activated by default) Colin says from colinTips[0]. Bottom half of canvas covered.</li>
  <li>1. (activated with done button onClick)Colin says from colinTips[1]. Top half of canvas is obscured and bottom half is revealed.</li>
  <li>2. (activated with done button onClick) Colin says from colinTips[2]. Top half is revealed. Name form and save button appear.</li>
  <li></li>
</ul>

<h3>Schema</h3>
<h4>Monster artowrk data:</h4>

```json
[
  {
    "id": 1,
    "monster_name": "colin",
    "top_artist": "Dave",
    "bottom_artist": "Zoe",
    "date_created": 23434554624356,
    "image_url": "???",
  },
]
```
<h3>Server API Endpoints</h3>
<h4>reqests:</h4>
## Server API Endpoints

| METHOD | ENDPOINT                     | USAGE                                      | RETURNS                     | QUERYKEY
| ------ | ---------------------------- | ------------------------------------------ | --------------------------- | -------------------------
| GET    | `api/v1/galley`                 | Get a list of all monster artwork          | All artowrk and data        | 'monsters'
| POST   | `api/v1/add`                    | Add a new monster to db                    | Returns empty object        | 'monsters'
| GET    | `api/v1/monster/:id`            | Get single monster by id                   | A single artwork object (*) | 'monsters', id
| PATCH  | `api/v1/monster/:id`            | Edit a monsters name                       | An empty obj                | 'monsters', id
| DELETE | `api/v1/monster/:id/delete`     | Delete a monster obj from DB               | An empty obj                | 'monsters', id



<h3>What does a day look like?</h3>
<ul>
<li><b>0900:</b> Morning standup. Establish plan/goals for the day and goals before the next standup. Vibe check and coffee!</li>
<li><b>0915:</b> Coding time. Step aways as needed. </li>
<li><b>1145:</b> Pre-lunch standup. What have you done, what is to do, any blockers? Update Kanban. Vibe check!</li>
<li><b>1200:</b> Lunch! </li>
<li><b>1300:</b> Coding time. Step aways etc.</li>
<li><b>1500:</b> If needed to bring eachother up to speed.</li>
<li><b>1645:</b> Retro stand-down. How did you go with your goals? Day in, day out, blockers etc. Any workflow changes? Vibe check, vibe adjustments(agile)! Celebrate!</li>
<li>Optional working after <b>1700</b> otherwise go home!.</li>
</ul>
<br>
<br>

<h3>Roles:</h3>
Responsibilities and expectations:
<ul>
<li><b>Product owner (Cody).</b> Client stories, product decisions align with client stories, final say on product decisions.</li>
<li><b>Scrum facilitator (Rose).</b> Structured, time-capped, planned standups. Kanban.</li>
<li><b>Git keeper (Noah).</b> Merge authority (pull req.), git process/workflow (branches, pulls, etc. )</li>
<li><b>Vibe watcher (Iggy).</b> Inclusion, expression, engagement and morale. </li>
</ul> 
<br>
<br>

<h3>Git flow and conventions:</h3>
<h4>Branches:</h4>
<ul>
<li>Main. <b>"main"</b> This is our production code and represents the product in its most complete and stable state.</li>

<li>Dev. <b>“dev”</b> This is our working “merge” branch. This represents our current sprint (of 3 planned) </li>
<li>Feature Branch. <b>“S1-canvas-stamps”</b> This represents a feature currently in development. When starting a new feature a new branch is made, old branches are kept.  </li>
</ul>
<h4>Working within the same file:</h4>
<ul>
<li>Communicate to the other team you will be doing work in their file, explain what the work is and if any existing code will need to be altered.  Loop the plan and ensure understanding from both teams. </li>
<li>
Ask yourself if working in the same file is necessary.  
If at all possible, section off the work and comment to make merging easier. 
</li>
<li>
If you need to alter anyone else's code, you must communicate this beforehand! Understanding and respect is important.
</li>
</ul>

<h4>Push, Merge, Pull workflow:</h4>
<ul>
<li>When a group finishes a feature, both groups will do a push to github and create a pull request from their feature branch into dev.</li>
<li>Git keeper (Noah) will merge the requests, if there are conflicts everyone should mob the merge machine.</li>
<li>Both groups will pull into local dev from remote dev and update both their dev branch and feature branch. This ensures both groups are up to date with each other after every merge. (RESEARCH!)</li>
<li><b>git checkout dev, git pull origin dev, git checkout “feature”, git pull origin dev</b></li>
</ul>

<h4>Commits:</h4>
Commit regularly, and leave a short descriptive message. Celebrate on commit.
<b>Make sure you git iam every commit!!</b>  
<br>
<br>

<h3>How and when will we get help?</h3>
<ul>
<li>Stuck timers (~20mins), sticker rewards.</li>
<li>Research/chat GPT.</li>
<li>Ask other people within team.</li>
<li>Ask facilitator.</li>
</ul>



<h3>Things to research?</h3>
Our main point of uncertainty is how to facilitate drawing on our app. HTMLCanvas is our primary candidate. 
We need to somehow restrict a user from seeing or drawing on half of the image, and then stitching them together to one image. 
In sprint 2 we are working out how to save our drawing as a PNG(?, multer) and export them as an image to the user's machine, we can refer to our foundation's exercise “dress the clown” for reference. 
How to save the separate canvases to then be stitched together.
Part of the game is the second player needs a reference to “join” the parts of the monster together. We need to figure out how to keep a portion of the first image visible, yet stop the second player from interacting with it.
Saving the drawing client side/keeping them safe from react. React context or useRefs, for saving every click. Preserved against page refresh, state change etc. THIS IS A BIG ONE!!
       

<br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br>       



<h2>Pre Planning</h2>

<h4>Expectations:</h4>
<ul>
<li>Extra work, Saturday is off day! Limited work on Sunday.</li>
<li>5 min step aways.</li>
<li>Developing and prioritising process.</li>
<li>Use new tech (HTML canvas?).</li>
<li>Achievable MVP (literally minimum viable product), with sprints to add on top. </li>
<li>Get some learning stories, taking notes!</li>
<li>Respecting roles and taking them seriously.</li>
<li>Have fun on top of all this!</li>
<li>Bootcamp times mon-fri. Here at 9.</li>
<li>Planned breaks, 12-1pm plus additional if needed. </li>
<li>After hours no expectation to do work.</li>
<li></li>

</ul>

<h4>Communication: </h4>
<ul>
<li>Handovers (handshake), run through of your code, looping. </li>
<li>Communicate deviation from expectations in Facebook GC or in person.</li>
<li>Talking elephant/pillow in standups.</li>
<li>Looping the plan.</li>
<li>Facebook messenger (Discord for transfer of media/code). </li>
<li>Everyone's responsibility, do not assume. </li>
<li></li>
</ul>

<h4>Decisions/Conflict: </h4>
<ul>
<li>Product owner final say on product decisions, listens to what others have to say.</li>
<li>Technical decisions, made as a group(Bring it back to process).</li>
<li>Communicate early if you have an issue.</li>
<li>Step away from computer if you feel agitated.</li>
<li>Feel free to talk about feelings (Normalise it!)  </li>
</ul>

<h4>How and when we will involve people in conversations:</h4>
<ul>
<li>Pairing and switching of pairs.</li>
<li>If your code interacts with code outside of where you are working, clear this with other team.</li>
<li>Planning involves everyone.</li>
<li>Standups/vibe check-ins involve everyone. </li>
<li>If external help (for features that involve more than one person) is required everyone is involved!</li>
<li>Share your learnings in standups.</li>
<li>Quick standups together then breakout groups (pairs).</li>
</ul>

<h4>Planning tools:</h4>
<ul>
<li>Kanban (physical), update on standups.</li>
<li>Small, high resolution kanban tasks.</li>
<li>Sprints (MVP, then stretch blocks).</li>
<li>Standups.</li>
<li>Documentation, shape of data, wireframe, stack diagram.</li>

</ul>

<h4></h4>

<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<h4></h4>



<h1>Unorganised thus far</h1>
<h3>MVP, How much work will it take?</h3>
Making the “frame” will take under a day, incorporating the drawing element (i.e HTMLCanvas) is a partial unknown. We expect this to take another day but more research is required. Tech we will be using:
-Database, SQLite3, Knex
-multer(middleware, for storing images) 
-HTMLCanvas (pending RnD)
-Typescript
-ReactJS









Will we go outside?
 Weather permitting, one stand-up walk around the block. 

Documentation, what will we document?
Db diagrams, data Schema
Naming conventions
URLs for back+front end
Git process
Sprints
Wireframe
Colour theme (CSS variables)

Kanban!



Wireframe
Submitted in pre planning submission

User stories
User stories in pre planning submission

DB diagrams
In discord. As per mvp only 1 table with no joins. Stretch material involves more Db tables.



Saving drawings:
Need to save from react state changes. Hide from react!
Save to local storage periodically to preserve against refreshes etc. Local storage can pull from image data on a timer. 

Assume canvas will be rerendered at any time, how do we save the drawing?
Const canvas = useRef() for small changes on canvas. React doesn’t know shhh! Ref updates constantly. Does ref protect our drawing from react state change?

useContext() may need to be used if useRef doesn't work as we think.

Need to save to DB on completion of half of the monster. Save as PNG w multer or save as coordinates to SQLite3. 

Drawing zone:
Passing state into drawing zone to dictate pen colour etc. 





# Boilerplate: Fullstack with Sass

## Setup

### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Vitest and testing library
* configuration for server-side debugging in VS Code
* configuration for preprocessing Sass

### Installation

#### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

#### **From the command line**

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack-query [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-fullstack-query)
