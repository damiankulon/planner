# Planner
```
     ________  _______   ________  ________  ________  ________  ________
    /        \/       \ /        \/    /   \/    /   \/        \/        \
   /         /        //         /         /         /         /         /
  //      __/        //         /         /         /        _/        _/
  \\_____/  \________/\___/____/\__/_____/\__/_____/\________/\____/___/  
```


> [!NOTE]
> <p align="left">API-First application created for the competition <a href="https://100commitow.pl">#100commitow</a> created by <a href="https://devmentors.io/">DevMentors</a></p>

## Needs
<p align="left">I want to create an open-source holiday management application for small teams.</p>

## Technologies
- NodeJS
- Typescript
- React
- ExpressJS

## Goals
Learn Event-Driven Architecture in NodeJS.

## Features
- [ ] API
- [ ] Create your team
- [ ] Manage time off
- [ ] Check all scheduled leaves in the calendar view
- [ ] Automatic notifications for employees on any status change of their submitted request


## Nice to have
- [ ] Create schedules
- [ ] Allocate resources
- [ ] Schedule and monitor everyone`s workload
- [ ] Plan projects
- [ ] The full picture for scheduling project work

## Start the application

Run `npx nx serve app` to start the development server. Happy coding!

## Build for production

Run `npx nx build app` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Contributing

Feel free to contribute to the project. Your feedback and contributions are highly appreciated!
