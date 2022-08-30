import nodemailer from 'nodemailer';

enum FormType {
  order = 'order',
  consultation = 'consultation',
}

interface IOrderFormData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  item: any;
}

interface IConsultationFormData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  budget: string;
}

interface IFormData {
  type: FormType;
  data: IOrderFormData | IConsultationFormData;
}

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: Number(config.smtpPort),
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass,
  },
});

const from = config.mailFrom;
const to = config.mailTo;

const sendEmail = (formData: IFormData) => {
  if (!formData.data.name) throw new Error('Missing formData.data.name');
  if (!formData.data.surname) throw new Error('Missing formData.data.surname');
  if (!formData.data.phone) throw new Error('Missing formData.data.phone');
  if (!formData.data.email) throw new Error('Missing formData.data.email');

  let subject = 'Tinkoff, MIUZ Diamonds';
  let text = `Данные заявки:\n`;
  text += `Имя:  ${formData.data.name}\n`;
  text += `Фамилия:  ${formData.data.surname}\n`;
  text += `Телефон: ${formData.data.phone}\n`;
  text += `e-Mail:  ${formData.data.email}\n\n\n`;

  if (formData.type === FormType.consultation) {
    subject += ` заявка на консультацию`;

    const data = formData.data as IConsultationFormData;
    text += `Бюджет:  ${data.budget}\n`;
  }

  if (formData.type === FormType.order) {
    subject += ` заявка на приобретение`;

    const data = formData.data as IOrderFormData;

    if (!data.item) throw new Error('Missing formData.data.item');

    text += `Бриллиант:  \n\n`;
    text += `ID:  ${data.item.dia_id}\n`;
    text += `Стоимость для клиента Tinkoff:   ${data.item.dia_price_tink}   руб. с НДС\n\n`;
    text += `Огранка:  ${data.item.dia_cut}\n`;
    text += `Цвет: ${data.item.dia_color} \n`;
    text += `Чистота: ${data.item.dia_clarity_type}\n`;
    text += `Цвет по международным стандартам: ${data.item.dia_color_int}\n`;
    text += `Чистота по международным стандартам: ${data.item.dia_clarity_int}\n`;
    text += `Вес карат: ${data.item.dia_carat}\n`;
  }

  transporter.sendMail({
    from, //'"Orders from diamond site" <orders@miuz.ru>', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    // html: '<b>Hello world?</b>', // html body
  });
};

export default defineEventHandler(async (event) => {
  const formData = (await useBody(event)) as IFormData;

  // console.log(formData);

  switch (formData.type) {
    case FormType.order:
    case FormType.consultation:
      sendEmail(formData);
      break;
    default:
  }

  return {
    api: 'works',
  };
});
