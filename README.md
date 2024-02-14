# Blazor + Preline UI 💡

```shell
npm init -y
npm install tailwindcss --save-dev
npm install @tailwindcss/forms --save-dev
npm install preline
npx tailwindcss init

// tailwindcss.js
module.exports = {
	content: [
		'./**/*.html',
		'./**/*.razor',
		'./**/*.js',
		// Include the Preline UI components in the content configuration
		'node_modules/preline/dist/*.js'
	],
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/forms'),
		require('preline/plugin')
	],
};

// cmd
npx tailwindcss -i ./wwwroot/css/global.css -o ./wwwroot/css/app.css --watch

copy preline.js and past it in ./wwwwroot/js

// index.html
<script src="js/preline.js"></script>

// MainLayout.razor
protected override async Task OnAfterRenderAsync(bool firstRender)
{
	// Invoke Preline UI
	await JSRuntime.InvokeVoidAsync("window.HSStaticMethods.autoInit");
}

// .csproj
<Target Name="NpmRunBuild" BeforeTargets="BeforeBuild">
	<Exec Command="npm run build" />
</Target>
