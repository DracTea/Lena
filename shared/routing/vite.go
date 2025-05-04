package routing

import (
	"encoding/json"
	"os"
	"strings"
)

type Manifest struct {
	File    string   `json:"file"`
	Src     string   `json:"src"`
	IsEntry bool     `json:"isEntry"`
	Css     []string `json:"css"`
}

func Vite() string {
	_, err := os.Stat("var/tmp/app.hot")
	if err != nil {
		return viteProd()
	}

	return viteDev()
}

func viteProd() string {
	manifest := "public/build/manifest.json"

	_, err := os.Stat(manifest)
	if err != nil {
		return ""
	}

	data, err := os.ReadFile(manifest)
	if err != nil {
		return ""
	}

	manifests := map[string]Manifest{}
	err = json.Unmarshal(data, &manifests)
	if err != nil {
		return ""
	}

	cont := ""
	for _, manifest := range manifests {
		if !manifest.IsEntry {
			continue
		}

		if strings.Contains(manifest.File, ".js") {
			cont += jsFile(manifest.File)
		} else if strings.Contains(manifest.File, ".css") {
			cont += cssFile(manifest.File)
		}

		if manifest.Css == nil {
			continue
		}

		if len(manifest.Css) == 0 {
			continue
		}

		for _, css := range manifest.Css {
			cont += cssFile(css)
		}
	}

	return cont
}

func jsFile(url string) string {
	return `<script type="module" src="/assets/build/` + url + `"></script>` + "\n"
}

func cssFile(url string) string {
	return `<link rel="stylesheet" href="/assets/build/` + url + `">` + "\n"
}

func viteDev() string {
	cont := `
	   <script type="module">
      import RefreshRuntime from 'http://[::1]:5142/@react-refresh';
      RefreshRuntime.injectIntoGlobalHook(window);
      window.$RefreshReg$ = () => {};
      window.$RefreshSig$ = () => (type) => type;
      window.__vite_plugin_react_preamble_installed__ = true;
    </script>

    <script type="module" src="http://[::1]:5142/@vite/client"></script>
    <script type="module" src="http://[::1]:5142/src/main.tsx"></script>
	`

	return cont
}
