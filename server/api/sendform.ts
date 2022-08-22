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

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: 'orders@miuz.ru',
    pass: '4hNzU9TeJE',
  },
});

const from = 'orders@miuz.ru';
const to = 'sem@ishinov.com, ectoplazm@gmail.com';

const sendEmail = (formData: IFormData) => {
  let subject = 'Tinkoff, MIUZ Diamonds';
  let text = `Данные заявки:\n`;
  text += `Имя:  ${formData.data.name}\n`;
  text += `Фамилия:  ${formData.data.surname}\n`;
  text += `Телефон: ${formData.data.phone}\n`;
  text += `e-Mail:  ${formData.data.email}\n`;

  if (formData.type === FormType.consultation) {
    subject += ` заявка на консультацию`;

    const data = formData.data as IConsultationFormData;
    text += `Бюджет:  ${data.budget}\n`;
  }

  if (formData.type === FormType.order) {
    subject += ` заявка на приобретение`;

    const data = formData.data as IOrderFormData;
    text += `Бриллиант:  \n${JSON.stringify(data.item, null, 2)}\n`;
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

  console.log(formData);

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
