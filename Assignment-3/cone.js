var gl = null;
var cone = null;

function init() {
    cone = New Cone( gl, 10 );

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
