var cone = null;

function init() {
    cone = New Cone( n );

    gl = WebGLUtils.setupWebGL( cone );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 0.419608, 0.137255, 0.556863, 1.0 );    

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    cone.render();
}

window.onload = init;
