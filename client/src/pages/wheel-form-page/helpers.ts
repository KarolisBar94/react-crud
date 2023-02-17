 export const formatValues = (form: HTMLFormElement) => {
    const formData = new FormData(form);
  
    const brand = formData.get('brand');
    const style = formData.get('style');
    const price = formData.get('price');
    const rating = formData.get('rating');
    const images = formData.getAll('images');
    
    if (brand === null || brand instanceof File || brand.length < 1) throw new Error('incorrect Brand');
    if (style === null || style instanceof File || style.length < 1) throw new Error('incorrect Style');
    if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
    if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
    images.forEach((img, i) => {
      if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
    });
  
    return {
      brand,
      style,
      images: images as string[],
      price: `${Number(price).toFixed(2)}`,
      rating: Number(rating),
    };
  };