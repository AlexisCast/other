useEffect(() => {
    fetch(`${baseUrl}/cart.json`, {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
    console.log(baseUrl);
    console.log(cart);
  }, [cart]);

  screen.debug()