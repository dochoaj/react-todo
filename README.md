# React To Do

This is a simple React To Do project, based on Create React App scaffolding.

![Alt Text](https://media.giphy.com/media/1kJ0yVkEZaTsQMYfWt/giphy.gif)

## How to run

You need the following dependencies:

- Yarn
- Node (8.9.2+)

Open a terminal and clone this repo (duh!). In the cloned repo directory please type `yarn && yarn start`. A browser window should open and navigate to the correct location. If this doesn't happen please open a browser and navigate to http://localhost:3000/.

## React Component Hierarchy

```bash
└── App
    └── TaskCreator
    └── BoardFilter
    │   └── BoardFilterOptions
    │       └── BoardFilterOption
    └── Boards
        └── Board
            └── Board
                └── Tasks
                    └── Task
```

* App: App is the main state manager of the application. This component knows how to actually do pretty much everything with task data and controls the main application state. It's pure functions are "passed down by props" to the deeper components to actually be executed on the correct callbacks
based on interactions. It has some dummy tasks to start and they can be modified using the UI.

* TaskCreator: This components manages the interactions needed to get user input in order to create a new task. The used callback to do so is sent by its parent.

* BoardFilter: This components manages the task filtering interactions. Under the hood it uses the App `statuses` state to render all available options. The side effect of this state value is that controls who Board is rendered to DOM. The avaiableBoards property is merged with an `all` option who simulates the "no filter" state.

* Boards: A board is a group of tasks who has the same status. This component allows the following:

  - Provides a sugar to UI/UX by ordering the similar tasks while grouping. This allows an O(n) complexity by using the "filter task by status" feature to also order the tasks on screen.

  - The BoardFilter is not about tasks, it's about Boards. So if this app somewhere needs a feature
  who introduces a "new state for tasks" or even empower users to have the ability to create custom state for tasks, the problem only is to generate more boards.

  - The UI could change to an horizontal approach. The classic Trello view with different boards it's only coarced by a flex property :)

* Task: A task who appears on screen. A task knows that it can change it status or even be deleted. But doesn't know how. This is the Smart-Dumb component pattern applied.

## Application Architecture

The selected architecture is a classic deep down hierarchy. App component controls the main application state and it pass down all the required callbacks to modify state. If this application were connected to a backend, this is, in a React only approach, where the React Lifecycle methods should be used to make requests. For instance, to add a new task to the list, the actual pure function is defined on App (onTaskAddition) and is passed down to `TaskCreator` component, because this is where the user interaction actually is. When the user hit the button controlled by `TaskCreator` a callback is fired and this is where the `onTaskAddition` method is executed. The same pattern applies to the remaining CRUD operations.

The component folder architecture is also a classic Single Responsability Principle, where all components have it's own folder, who has the React logic and stylesheets separated on their own files. This decision is based on application size. This is not a huge application, so using a module based approach, with List, Create, Delete modules, would be an overkill. This is not a complex state application, so using a state container like Redux or MobX would be also an overkill. This is a simple application who fits on a simple pattern.

