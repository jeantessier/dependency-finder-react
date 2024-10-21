import './Dependency.css'

export default function Dependency({ direction, name, confirmed }) {
    return (
        <div className={confirmed ? 'dependency' : 'dependency inferred'}>{direction} {name}{!confirmed && ' *'}</div>
    );
}
