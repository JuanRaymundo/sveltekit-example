<script>
  import Button from '../components/Button.svelte';
  import Theme from '../components/Theme.svelte';
</script>

<style windi:preflights:global windi:safelist:global>
</style>

<Theme>
  <div p="2">
    <Button>
      Hello dynamic theme
    </Button>
  </div>
</Theme>
