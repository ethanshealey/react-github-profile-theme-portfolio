# Welcome to my Github Profile themed Portfolio!

This project was built using ReactJS. To clone and use this project for your own portfolio you can simply run `git clone https://www.github.com/ethanshealey/react-github-profile-theme-portfolio`. Once cloned run `npm init` in order to install the needed packages.

To modify the known languages and skills, browse the available icons offered by [React Icons](https://react-icons.github.io/react-icons/) and build your own blocks with the Skill component.

To modify Projects, open `src/static/projects.json` and replace whats there with your own. the syntax is as follows:
```json
[
  {
    "name": "Project 1",
    "url": "www.example.com",
    "description": "This is my project!",
    "image": "path/to/example/image",
    "main_language": "The main language used in the project, i.e JavaScript",
    "source": "Github URL",
    "tools": [
       "Languages",
       "Or any kind of",
       "APIs and tools used",
       "to build the app"
    ],
    "features": [
       "List of features",
       "your app does"
    ]
  } 
]
```

To modify Certificates, open `src/static/certificates.json` and replace whats there with your own. The syntax is as follows:
```json
[
  {
    "name": "name of cert",
    "image": "image of cert",
    "provider": "who provided the cert",
    "url": "URL to cert provider proving you achieved it"
  }
]
```