searchState.loadedDescShard("verso", 0, "Verso Web Browser\nUtilities to write tests.\nVerso’s compositor component to handle webrender.\nUtilities to read options and preferences.\nError and result types.\nUtilities to handle keyboard inputs and states.\nVerso’s rendering context.\nUtilities to handle touch inputs and states.\nMain entry types and functions.\nWeb view types to handle web browsing contexts.\nVerso’s window types to handle Winit’s window.\nRe-exporting Winit for the sake of convenience.\nMouse click event\nCompositor has shut down.\nThe Verso compositor contains a GL rendering context with …\nData used to construct a compositor.\nMouse down event\nMouse up event\nMouse event for the compositor.\nCompositor is still running.\nSet profiler flags to webrender.\nSet render target flags to webrender.\nShutdown State of the compositor\nCompositor is shutting down.\nSet texture cache flags to webrender.\nVarious debug and profiling flags that WebRender supports.\nComposite to the given target if any, or the current …\nA channel to the constellation.\nThe channel on which messages can be sent to the …\nThe current window that Compositor is handling.\nConsume compositor itself and deinit webrender.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the application is currently animating. Typically, …\nTell compositor to start shutting down.\nA channel to the memory profiler thread.\nCreate a new compositor.\nHandle the mouse event in the window.\nHandle mouse move event in the window.\nSimulate a pinch zoom\nNotify compositor the provided webview is resized. The …\nHandle the window resize event and return a boolean to …\nHandle the window scale factor event and return a boolean …\nHandle scroll event.\nHandle touch event.\nHit test and forward the wheel event to constellation.\nHandle zoom reset event\nHandle zoom event in the window\nPerform composition and related actions.\nReceive and handle compositor messages.\nA port on which messages inbound to the compositor can be …\nServo’s rendering context\nThe glutin instance that webrender targets\nRepaints and recomposites synchronously. You must be …\nResize the rendering context and all web views. Return …\nSet the root pipeline for our WebRender scene to a display …\nA channel to the compositor.\nTracks whether we are in the process of shutting down, or …\nChange the current window of the compositor should display.\nA channel to the time profiler thread.\nUpdate debug option of the webrender.\nInstance of webrender API\nWebrender API\nThe webrender interface, if enabled.\nWebrender document ID\nWebrender GL handle\nWebXR registry\nSome XR devices want to run on the main thread.\nConfiguration of Verso instance.\nRegister URL scheme protocols\nReturns the argument unchanged.\nInit options and preferences.\nCalls <code>U::from(self)</code>.\nCreate a new configuration for creating Verso instance. It …\nGlobal flag options of Servo.\nPath to resources directory.\nContains the error value\nErrors returned by Verso.\nA general error that may occur while running the Winit …\nGlutin errors.\nContains the success value\nThe error type for when the OS cannot perform the …\nConvenient type alias of Result type for Verso.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSome shortcuts use Cmd on Mac and Alt on other systems.\nSome shortcuts use Cmd on Mac and Control on other systems.\nConvert Winit’s KeyEvent to Servo’s KeyboardEvent\nA Verso rendering context, which holds all of the …\nCreate a rendering context instance.\nCreate a surface based on provided window.\nReturns the argument unchanged.\nFind the config with the maximum number of samples, so our …\nCalls <code>U::from(self)</code>.\nMake GL context current.\nPresent the surface of the rendering context.\nResize the rendering context.\nSimulate a mouse click.\nScript is consuming the current touch sequence; don’t …\nSend a JavaScript event to content.\nA multi-touch gesture is in progress. Contains the number …\nDon’t do anything.\nNot tracking any touch point\nA single touch point is active and has started panning.\nA two-finger pinch zoom gesture is active.\nScroll by the provided offset.\nThe action to take in response to a touch event\nHandler of touch inputs and states.\nThe point of touch input\nThe states of the touch input state machine.\nA single touch point is active and may perform click or …\nA touchstart event was dispatched to the page, but the …\nZoom by a magnification factor and scroll by the provided …\nCerrent active touch points.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nID of touch point\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a touch handler.\nCreate a new touch point.\nHandle event result.\nHandle touch cancel input.\nHandle touch down input.\nHandle touch move input.\nHandle touch up input.\nThe position of this point\nState of the touch handler\nMain entry point of Verso browser.\nReturns the argument unchanged.\nHandle message came from Servo.\nHandle Winit window events\nCalls <code>U::from(self)</code>.\nReturn true if one of the Verso windows is animating.\nCreate a Verso instance from Winit’s window and event …\nA web view is an area to display web browsing context. It…\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate a web view from Winit window.\nThe position and size of the webview.\nSet the webview size corresponding to the window size.\nWebview ID\nA Verso window is a Winit window containing several web …\nReturns the argument unchanged.\nHandle servo messages. Return true if it requests a new …\nHandle servo messages with main panel. Return true it …\nHandle servo messages with corresponding web view ID.\nHandle Winit window event and return a boolean to indicate …\nCheck if the window has such webview.\nGet Winit window ID of the window.\nCalls <code>U::from(self)</code>.\nCreate a Verso window from Winit window and return the …\nCreate a Verso window with the rendering context.\nGet the painting order of this window.\nRemove the webview in this window by provided webview ID. …\nQueues a Winit <code>WindowEvent::RedrawRequested</code> event to be …\nScale factor of the window. This is also known as HIDPI.\nSet cursor icon of the window.\nSize of the window that’s used by webrender.")