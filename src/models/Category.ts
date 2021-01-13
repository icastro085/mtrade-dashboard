import * as yup from 'yup';

export interface ICategory {
  _id?: string;
  name: string;
  parentId?: string;
  parent?: ICategory;
  children?: ICategory[];
}

export const schema: yup.SchemaOf<ICategory> = yup.object({
  _id: yup.string(),
  name: yup.string().required(),
  parentId: yup.string(),
  parent: yup.object(),
  children: yup.array().of(yup.object()),
});
