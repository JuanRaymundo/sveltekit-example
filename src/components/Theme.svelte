<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import parseTheme from '../utils/parseTheme';

  export let primary = '#1976d2';

  let theme = writable(parseTheme({ primary }));
  setContext('theme', theme);

  $: theme.set(parseTheme({ primary }));
</script>

<slot />
