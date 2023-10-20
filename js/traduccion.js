function vertraducido() {
    fetch('https://text-translator2.p.rapidapi.com/translate', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'a70fb862a0msh22da1af0395dcd9p16eeefjsn6d75cf770cfd',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: 'es',
        target_language: 'en',
        text: "ENTRADAS, Chorizo 1500, Morcilla 1200, Matrimonio 2300 (1 chorizo and 1 morcilla), Provoleta de la casa 2700, Chinchulines 1400, Empanadas 700 (empanada de carne a cuchillo or J&Q fritas), Mollejas con crema 3300 Mollejas a la parrilla con salsa de crema, Aros de cebolla 1800, Mix de achuras 3800 ½ chorizo ½ morcilla ½ porción de chinchulines y 1 provoleta, ASADO, Pata-muslo con manteca de hierbas 4000, Entraña 5000, Vacío 4500, Costillar 6500, Porter-house 5600, T-bone 5200, Matambre de cerdo 4000, AHUMADOS, Ribs a la barbacoa 6500$, Bondiola con reducción de cerveza negra 6000$, Sándwich de brisket ahumado 3500$, PARRILLADA, de la casa 11000$ (entraña, bondiola, porter-house, provoleta, chorizo and an ensalada a elección), Ahumada 9800$ (ribs a la barbacoa, bondiola con reducción de cerveza negra, morcilla and an ensalada a elección), COCINA, Ravioles con salsa 3300$ (crema, pure de tomate or mezcla), Pasta caccio e pepe 3600$ (veggie) (tagliatelle con salsa de queso y pimienta), Pechuga de pollo rellena de queso azul 3000$ (viene con acompañamiento), Milanesa de pollo con bechamel and quesos 3500$ (viene con acompañamiento), Milanesa de carne 2800$ (viene con acompañamiento), ACOMPAÑAMIENTOS, Papas fritas 1000$, Batatas fritas 1200$, Pure de papa 1200$, Papas a caballo 1800$, Ensalada de 4 verduras 1000$, Dos huevos fritos 800$, TRAGOS, Gin tonic 1800, Negroni 1800, Aperol sprit 1800, Americano 1800, Fernet con cola 1800, POSTRES, Creme brulee 2800, Flan con crema, dulce or mixto 2300, Brownie con helado 3200, Crumble de manzana 3300, Cheesecake de frutos rojos 3500, VINOS, Copa de vino 2000 (malbec, merlot or Cabernet Sauvignon), Botella de Malbec 4000, Botella de Cabernet Sauvignon 4000, Botella de Pinot 4000, Botella de Merlot 4000, Botella de vino Rosado 4500, Botella de vino Espumante 5500"
      })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Invalid response');
    }
      return response.json();
    })
    .then((data) => {
      const textoingles = JSON.stringify(data);
      const contenedor = document.getElementById('textoinglescontenedor');
      const item = document.createElement("p");
      item.textContent = textoingles;
      contenedor.appendChild(item);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }