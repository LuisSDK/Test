import { IGRPNotification, type IGRPNotificationProps } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/nextjs-vite';
import { IGRPIconObject } from '@/components/igrp/icon';

const meta: Meta<typeof IGRPNotification> = {
  title: 'Components/Notification',
  component: IGRPNotification,
  argTypes: {
    className: { control: 'text' },
    showIcon: { control: 'boolean' },
    content: { control: 'object' },
    showClose: { control: 'boolean' },
    iconName: {
      control: 'select',
      options: IGRPIconObject,
    },
    showLink: { control: 'boolean' },
    lableLink: { control: 'text' },
    actionLink: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'error', 'info', 'success', 'warninig'],
      defaultValue: 'info',
    },
    border: {
      control: 'radio',
      options: ['default', 'colored'],
      defaultValue: 'default',
    },
    customActions: { control: 'object' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryFn<IGRPNotificationProps> = (args) => <IGRPNotification {...args} />;

export const Default: StoryObj<IGRPNotificationProps> = {
  render: Template,
};
