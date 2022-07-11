const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
        host: Object.assign(
            {},
            offer.host,
            {
              isPro: offer.host.is_pro,
              avatarUrl: offer.host.avatar_url,
            }
        )
      },
  );

  delete adaptedOffer.max_adults;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};


const adaptCommentsToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        user: Object.assign(
            {},
            comment.user,
            {
              isPro: comment.user.is_pro,
              avatarUrl: comment.user.avatar_url,
            }
        )
      },
  );

  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;

  return adaptedComment;
};

const adaptToServer = (offer) => {

  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        'is_premium': offer.isPremium,
        'max_adults': offer.maxAdults,
        'is_favorite': offer.isFavorite,
        'preview_image': offer.previewImage,
        'host': Object.assign(
            {},
            offer.host,
            {
              'is_pro': offer.host.isPro,
              'avatar_url': offer.host.avatarUrl,
            }
        )
      },
  );

  // Ненужные ключи мы удаляем
  delete adaptedOffer.isPremium;
  delete adaptedOffer.maxAdults;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.previewImage;
  delete adaptedOffer.host.isPro;
  delete adaptedOffer.host.avatarUrl;

  return adaptedOffer;
};

export {adaptToClient, adaptToServer, adaptCommentsToClient};
