<script>
  import { getContext } from 'svelte';

  const theme = getContext('theme');

  $: primary = $theme.primary.color.join(',');
  $: primaryContrast = $theme.primaryContrast.color.join(',');
</script>

<button
  style="--primary: {primary}; --primary-contrast: {primaryContrast};"
  class="p-2 rounded bg-primary text-primary-contrast"
>
  <slot />
</button>
