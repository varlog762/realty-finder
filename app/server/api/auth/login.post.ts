export default defineEventHandler(async (event) => {
  // 'event' - это как 'req' и 'res' из Express, но в одном
  // Получаем тело запроса (наш email и password)
  const body = await readBody(event);

  // Тут должна быть реальная логика (проверка в базе данных...)
  // Но мы просто симулируем успех:
  console.log("--- API /login ПОЛУЧИЛ: ---", body);

  // Хардкодим проверку:
  if (body.email === "test@test.com" && body.password === "12345") {
    // В реальном мире мы бы вернули JWT токен
    return {
      status: "success",
      message: "Добро пожаловать!",
      token: "fake-jwt-token-for-testing-123",
    };
  } else {
    // Возвращаем ошибку
    // Nuxt сам поймет, что это ошибка
    throw createError({
      statusCode: 401, // 401 Unauthorized
      statusMessage: "Неверный email или пароль",
    });
  }
});
