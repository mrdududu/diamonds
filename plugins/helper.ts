export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  return {
    provide: {
      getError: (field: any): string | null => {
        if (field.$error) {
          switch (field.$errors[0].$validator) {
            case 'required':
              return 'Обязательное для заполнения поле';
            case 'email':
              return 'Не верный e-Mail';
          }

          return field.$errors[0].$message;
        }

        return null;
      },

      getPhotoUrl: (item: any) =>
        `${runtimeConfig.public.apiHost}${item.dia_photo.data.attributes.url}`,
    },
  };
});
