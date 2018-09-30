# Todoist Shortcuts Nativefier

## Why?

[Todoist](https://todoist.com) is a powerful todo-list and task manager. It offers a [MacOS Application](https://itunes.apple.com/ca/app/todoist-organize-your-life/id585829637), which provides a dedicated application that has a _quick task adding_ feature. The only issue is that Todoist doesn't have strong keyboard navigation and shortcuts. Enter [todoist-shortcuts](https://github.com/mgsloan/todoist-shortcuts) which is a browser extension that adds these missing functionalities to the web client. Unfortunately, there is no way to get this extension in the native application...

## How?

This project uses [nativefier](https://github.com/jiahaog/nativefier) to create a desktop application wrapping the web client. As part of this process, it is possible to _inject_ custom JavaScript to be executed within the newly created application.

This allows us to inject the `todoist-shortcuts` source code into the application providing the desktop application with keyboard shortcuts and navigation.

The _badge count_ didn't work (i.e., number of tasks in _Today_) so additional JavaScript was needed to propagate the count of tasks into the title of the window. With the task count in the title of the window, `nativefier` can pick it up and display the application with a proper badge count (and bounce on changes).

Unfortunately, `nativefier` has an issue with [injecting multiple JavaScript files](https://github.com/jiahaog/nativefier/issues/458). As a workaround, we concatenate the JavaScript into one file before _injecting it_ (which fortunately works with the JavaScript we have).

## Usage

First, you install the dependencies:
`npm install`

Next, we need to download `todoist-shortcuts`:
`npm run downloadTodoistShortcuts`

Finally, we build the application:
`npm run buildApplication`

## Workflow using Both Applications

I personally renamed the original application to `Todoist-native` so the new application can be moved over to the application directory with no conflicts. I kept the original application as I still like the _quick task adding_ feature. I hid the original application in the tray and prevent any notifications from appearing.

These changes then allow me to use the new application as my _main_ Todoist application while retaining the _quick task adding_ feature of the _original_ application.

# Contributing

1. Fork it ( https://github.com/[my-github-username]/todoist-shortcuts-nativefier/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
