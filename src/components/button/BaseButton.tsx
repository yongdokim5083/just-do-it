import styles from './base-button.module.css';

export function BaseButton({ ...props }) {
  return (
    <button type='button' className={styles['base-button']}>
      버튼
    </button>
  );
}
