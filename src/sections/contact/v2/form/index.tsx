import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';

const fieldClasses = cn(
  'bg-accent-100 dark:bg-accent-700 rounded-5 border-none'
);

export function Form() {
  return (
    <form className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-30px">
      <div>
        <TextInput
          placeholder="Your name"
          name="text"
          className={fieldClasses}
        />
      </div>
      <div>
        <TextInput
          placeholder="Your Email"
          name="email"
          className={fieldClasses}
        />
      </div>
      <div>
        <TextInput
          placeholder="Your Phone"
          name="phone"
          className={fieldClasses}
        />
      </div>
      <div>
        <TextInput
          placeholder="Your Address"
          name="address"
          className={fieldClasses}
        />
      </div>
      <div className="lg:col-span-2">
        <TextAreaInput
          placeholder="Message"
          name="message"
          className={cn(fieldClasses, 'min-h-[140px] pt-4 md:min-h-[200px]')}
        />
      </div>
      <div>
        <Button type="submit">
          <span className="relative z-1">SEND A MESSAGE</span>
        </Button>
      </div>
    </form>
  );
}
