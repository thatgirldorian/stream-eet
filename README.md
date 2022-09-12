# stream-eet

This is a streaming application built with React that allows you to create an account with Google Oauth. You can view all the streams on the application via a general feed. You can also create a new stream, edit it, and delete it. This app is broken into three parts: 

- The UI that the user can see in their browser, which is made with React and Redux
- A small web server that lists all the videos you can watch
- A RTMP (Real-time messaging protocol) server that handles the video feed

The navigation is done using React Router, while the forms via Redux forms. The error handling are handled neatly as well.


<h3>Issues faced & resolution:</h3>

- I ran into this error: *You should not use `<Link>` outside a `<Router>`* when trying to add my header as an always-visible component, but I was able to solve this by wrapping my content div with the `<BrowserRouter></BrowserRouter>` tag. 

<h3>Technology used:</h3>

- React JS
- Redux
- React Router
- Google Oauth + Google API library



<h3>Link to site:</h3>

<h3>Screenshare:</h3>

