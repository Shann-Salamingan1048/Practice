#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;


// Inputs the color from the Vertex Shader
in vec3 color;
// 3 na ini ka value kay vec3 meaning 3 or rgb

uniform float scale;
void main()
{
// rgb = color , alpha. ==> r,g,b,alpha
	
	FragColor = vec4( (color * scale), 1.0f );
}

/*
Exercise Easy: inverse the color
#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;


// Inputs the color from the Vertex Shader
in vec3 color;
// 3 na ini ka value kay vec3 meaning 3 or rgb

void main()
{
// rgb = color , alpha. ==> r,g,b,alpha
	FragColor = vec4( vec3(1.0) - (color), 1.0f);
}

*/
/*
Exercise make the color bright the bigger
#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;


// Inputs the color from the Vertex Shader
in vec3 color;
// 3 na ini ka value kay vec3 meaning 3 or rgb

uniform float scale;
void main()
{
// rgb = color , alpha. ==> r,g,b,alpha
	
	FragColor = vec4( (color * scale), 1.0f );
}


*/